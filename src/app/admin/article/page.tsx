"use client"
import NavHeader from '@/components/material/admin/nav-header'
import React, { useContext, useState } from 'react'
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
    } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet" 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { HmoContext } from '../../../../context/hmoContext'
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { RiMoreLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import EditArticle from '@/components/material/admin/article/EditArticle'
import { Separator } from '@/components/ui/separator'

export default function Articles() {
      const {article} = useContext(HmoContext)
      const {category} = useContext(HmoContext)
      const {author} = useContext(HmoContext)
      const [title, setTitle] = useState('');
      const [slug, setSlug] = useState('');
      const [brief, setBrief] = useState('');
      const [minutesRead, setMinutesRead] = useState('');
      const [imgUrl, setImgUrl] = useState('');
      const [authorId, setAuthorId] = useState('');
      const [categoryId, setCategoryId] = useState('');
      const [description, setDescription] = useState('');
      const [body, setBody] = useState('');
      

      // handle submit
      const handleSubmit = async (e: any) => {
            e.preventDefault();
        
            try {
              await addDoc(collection(db, "articles"), {
                title: title,
                slug: title,
                brief: brief,
                minutesRead: minutesRead,
                imgUrl: imgUrl,
                description: description,
                body: body,
                authorId: authorId,
                categoryId: categoryId,
                updatedOn: serverTimestamp()
              });
        
              // Reset form values
              setTitle('');
              setSlug('');
              setBody('');
              setBrief('');
              setMinutesRead('');
              setImgUrl('');
              setAuthorId('');
              setCategoryId('');
              setDescription('');
        
              console.log("Document successfully written!");
            } catch (error) {
              console.error("Error writing document: ", error);
            }
      };
      const handleDelete = async (id: string) => {
        try {
          await deleteDoc(doc(db, "articles", id)); // Delete document based on its Firestore ID
          // console.log("Document successfully deleted!");
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      };

  return (
    <>
    <NavHeader title="Artikel" />
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="w-full flex flex-col space-y-5">
            <div className="w-full flex items-center justify-between">
                  <h1 className='text-2xl font-semibold'>List Artikel</h1>
                  <Sheet>
                        <SheetTrigger asChild>
                        <Button variant="outline">Tambah Baru</Button>
                        </SheetTrigger>
                        <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Buat Artikel</SheetTitle>
                        <SheetDescription>
                              Make changes here. Click save when you&apos;re done.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="flex h-[80vh] overflow-y-scroll flex-col">
                          <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Banner URL
                                </Label>
                                <Input id="name" 
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Title
                                </Label>
                                <Input id="name" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Brief
                                </Label>
                                <Input id="name" 
                                value={brief}
                                onChange={(e) => setBrief(e.target.value)}
                                className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                Description
                                </Label>
                                <Input id="description" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                MinutesRead
                                </Label>
                                <Input id="name" 
                                value={minutesRead}
                                onChange={(e) => setMinutesRead(e.target.value)}
                                className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">
                              Author
                            </Label>
                            <select
                              id="type"
                              value={authorId}
                              onChange={(e) => setAuthorId(e.target.value)}
                              className="col-span-3 border rounded-md p-2"
                            >
                              {author.map((item) => (
                                <option key={item.id} value={item.id}>{item.data.name}</option>

                              ))}
                            </select>

                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">
                              Kategori
                            </Label>
                            <select
                              id="type"
                              value={categoryId}
                              onChange={(e) => setCategoryId(e.target.value)}
                              className="col-span-3 border rounded-md p-2"
                            >
                              {category.map((item) => (
                                <option key={item.id} value={item.id}>{item.data.name}</option>

                              ))}
                            </select>

                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Body
                                </Label>
                                <Textarea 
                                placeholder="Type your message here." id="message-2"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                className="col-span-3"
                                />
                                
                          </div>
                          </div>
                        </div>
                        <SheetFooter>
                        <SheetClose asChild>
                              <Button onClick={handleSubmit} type="submit">Save changes</Button>
                        </SheetClose>
                        </SheetFooter>
                        </SheetContent>
                  </Sheet>
            </div>
            <Table>
                  <TableCaption>A list of your articles.</TableCaption>
                  <TableHeader>
                  <TableRow>
                        <TableHead className="w-[100px]">uid</TableHead>
                        <TableHead>Banner</TableHead>
                        <TableHead>Judul</TableHead>
                        <TableHead>Deskripsi</TableHead>
                        <TableHead>Waktu Baca</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                  </TableHeader>
                  <TableBody>
                  {article.map((item) => (
                        <TableRow key={item.id}>
                              <TableCell>{item.id}</TableCell>
                              <TableCell className="font-semibold">{item.data.authorId}</TableCell>
                              <TableCell className="font-semibold">{item.data.title}</TableCell>
                              <TableCell>{item.data.description}</TableCell>
                              <TableCell>{item.data.minutesRead}</TableCell>
                              <TableCell>{item.data.author?.name}</TableCell>
                              <TableCell>{item.data.category?.name}</TableCell>
                              <TableCell className="text-right">
                              <Popover>
                                <PopoverTrigger>
                                  <RiMoreLine className='w-5 h-5' />
                                </PopoverTrigger>
                                <PopoverContent className='w-[100px] gap-y-3'>
                                  {/* edit */}
                                    <EditArticle 
                                    eid={item.id} 
                                    etitle={item.data.title} 
                                    eslug={item.data.slug} 
                                    ebrief={item.data.brief} 
                                    edescription={item.data.description}
                                    ebody={item.data.body} 
                                    eminutesRead={item.data.minutesRead} 
                                    eimgUrl={item.data.imgUrl} 
                                    eauthor={item.data.authorId} 
                                    ecategory={item.data.categoryId} 
                                    />
                                    <Separator orientation="horizontal" className='my-1.5' />
                                    {/* delete */}
                                    <Dialog>
                                      <DialogTrigger>
                                        <h1 className="text-sm cursor-pointer">Delete</h1>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                                          <DialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            and remove your data from our servers.
                                          </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                          <DialogClose>
                                              Close
                                          </DialogClose>
                                          <Button onClick={()=>{handleDelete(item.id)}}>Confirm</Button>
                                        </DialogFooter>
                                      </DialogContent>
                                    </Dialog>

                                </PopoverContent>
                              </Popover>

                              </TableCell>
                        </TableRow>
                  ))}
                  </TableBody>
            </Table>
      </div>
    </div>
    </>
    
  )
}

