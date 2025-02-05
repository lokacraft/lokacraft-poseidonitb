"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { db } from "../firebase";
import { DataType } from "../types/hmoData"; 
import {collection, getDocs, setDoc ,doc, query, where, orderBy, onSnapshot, getDoc, limit} from 'firebase/firestore'


const initialContext: DataType = {
      category: [],
      article: [],
      author: [],
      latestArticle: [],
      books: [],
      pilars: [],
}
const HmoContext = createContext<DataType>(initialContext);
type HmoProviderProps = {
      children: ReactNode;
  }
const HmoDataProvider = ({children}: HmoProviderProps) => {
      const [category, setCategory] = useState<any[]>([])
      const [article, setArticle] = useState<any[]>([])
      const [latestArticle, setLatestArticle] = useState<any[]>([])
      const [author, setAuthor] = useState<any[]>([])
      const [books, setBooks] = useState<any[]>([])
      const [pilars, setPilars] = useState<any[]>([])
      
      // categoryList
      useEffect(() => {
            // get and call category list
            const getCategory = async () => {
                  const categoryCollection = collection(db, 'categories');
                  const latestSnapshot = await query(categoryCollection,
                        orderBy('name', 'asc'))
                        // where("categoryId", "==", "3BBTf9ETCmFCoVxutMwb"),
                  
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setCategory(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              name: doc.data().name,
                              description: doc.data().description,
                              postedOn: doc.data().postedOn,
                            }
                          }))
                        );
                  });
                  // console.log(unsubscribe)
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getCategory()
      }, [])

      // authorList
      useEffect(() => {
            // get and call category list
            const getAuthor = async () => {
                  const authorCollection = collection(db, 'authors');
                  const latestSnapshot = await query(authorCollection,
                        orderBy('name', 'asc'))
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setAuthor(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              name: doc.data().name,
                              description: doc.data().description,
                              imgUrl: doc.data().imgUrl,
                              postedOn: doc.data().postedOn,
                            }
                          }))
                        );
                  });
                  // console.log(unsubscribe)
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getAuthor()
      }, [])
      // authorList
      useEffect(() => {
            // get and call category list
            const getPilars = async () => {
                  const authorCollection = collection(db, 'pilars');
                  const latestSnapshot = await query(authorCollection,
                        orderBy('name', 'asc'))
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setPilars(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              name: doc.data().name,
                              role: doc.data().role,
                              imgUrl: doc.data().imgUrl,
                              postedOn: doc.data().postedOn,
                            }
                          }))
                        );
                  });
                  // console.log(unsubscribe)
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getPilars()
      }, [])

      // books list
      useEffect(() => {
            // get and call category list
            const getBooks = async () => {
                  const booksCollection = collection(db, 'books');
                  const latestSnapshot = await query(booksCollection,
                        orderBy('title', 'desc'))
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setBooks(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              bannerUrl: doc.data().bannerUrl,
                              title: doc.data().title,
                              imgUrl: doc.data().imgUrl,
                              fileUrl: doc.data().fileUrl,
                              postedOn: doc.data().postedOn,
                            }
                          }))
                        );
                  });
                  // console.log(unsubscribe)
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getBooks()
      }, [])

      useEffect(() => {
            const getArticle = () => {
              const articleCollection = collection(db, 'articles');
              const latestSnapshot = query(articleCollection, orderBy('title', 'asc'));
          
              // Subscribe to real-time updates
              const unsubscribe = onSnapshot(latestSnapshot, async (querySnapshot) => {
                const articles = await Promise.all(
                  querySnapshot.docs.map(async (docSnapshot) => {
                    const articleData = docSnapshot.data();
                    const authorId = articleData.authorId;
                    const categoryId = articleData.categoryId;
          
                    try {
                      // Fetch author and category references
                      const [authorDoc, categoryDoc] = await Promise.all([
                        authorId ? getDoc(doc(db, 'authors', authorId)) : null,
                        categoryId ? getDoc(doc(db, 'categories', categoryId)) : null,
                      ]);
          
                      return {
                        id: docSnapshot.id,
                        data: {
                          title: articleData.title || '',
                          slug: articleData.slug || '',
                          brief: articleData.brief || '',
                          description: articleData.description || '',
                          body: articleData.body || '',
                          minutesRead: articleData.minutesRead || 0,
                          imgUrl: articleData.imgUrl || '',
                          authorId: articleData.authorId || '',
                          categoryId: articleData.categoryId || '',
                          author: authorDoc?.exists() ? authorDoc.data() : null,
                          category: categoryDoc?.exists() ? categoryDoc.data() : null,
                          updatedOn: articleData.updatedOn || null,
                        },
                      };
                    } catch (error) {
                      console.error('Error fetching related data:', error);
                      return null; // Skip this article if an error occurs
                    }
                  })
                );
          
                // Filter out null values (in case of errors)
                setArticle(articles.filter((article) => article !== null));
              });
          
              // Cleanup function to unsubscribe from listener
              return () => unsubscribe();
            };
          
            getArticle();
      }, []);

      // latest 5 article
      useEffect(() => {
            const getLatestArticle = () => {
              const articleCollection = collection(db, 'articles');
              const latestSnapshot = query(articleCollection, orderBy('updatedOn', 'desc'), limit(3)
            );
          
              // Subscribe to real-time updates
              const unsubscribe = onSnapshot(latestSnapshot, async (querySnapshot) => {
                const articles = await Promise.all(
                  querySnapshot.docs.map(async (docSnapshot) => {
                    const articleData = docSnapshot.data();
                    const authorId = articleData.authorId;
                    const categoryId = articleData.categoryId;
          
                    try {
                      // Fetch author and category references
                      const [authorDoc, categoryDoc] = await Promise.all([
                        authorId ? getDoc(doc(db, 'authors', authorId)) : null,
                        categoryId ? getDoc(doc(db, 'categories', categoryId)) : null,
                      ]);
          
                      return {
                        id: docSnapshot.id,
                        data: {
                          title: articleData.title || '',
                          slug: articleData.slug || '',
                          brief: articleData.brief || '',
                          description: articleData.description || '',
                          body: articleData.body || '',
                          minutesRead: articleData.minutesRead || 0,
                          imgUrl: articleData.imgUrl || '',
                          authorId: articleData.authorId || '',
                          categoryId: articleData.categoryId || '',
                          author: authorDoc?.exists() ? authorDoc.data() : null,
                          category: categoryDoc?.exists() ? categoryDoc.data() : null,
                          updatedOn: articleData.updatedOn || null,
                        },
                      };
                    } catch (error) {
                      console.error('Error fetching related data:', error);
                      return null; // Skip this article if an error occurs
                    }
                  })
                );
          
                // Filter out null values (in case of errors)
                setLatestArticle(articles.filter((article) => article !== null));
              });
          
              // Cleanup function to unsubscribe from listener
              return () => unsubscribe();
            };
          
            getLatestArticle();
      }, []);
          
          
          
      

      return (
            <HmoContext.Provider value={{ category, article, author, latestArticle, books,pilars }}>
                  {children}
            </HmoContext.Provider>
      )
}

export {HmoContext, HmoDataProvider}