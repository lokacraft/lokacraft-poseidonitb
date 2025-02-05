
import React, { useContext, useState } from 'react'
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
    import { Button } from '@/components/ui/button'
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { HmoContext } from '../../../../../context/hmoContext'
    import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
    import { db } from '../../../../../firebase'
    import { RiMoreLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'

interface BannerProps {
  eid: string;
  etitle: string;
  eslug: string;
  ebrief: string;
  edescription: string;
  ebody: string;
  eminutesRead: string;
  eimgUrl: string;
  eauthor: string;
  ecategory: string;
}

function EditArticle({eid, etitle,eslug,ebrief, edescription,ebody,eminutesRead, eimgUrl,eauthor,ecategory}: BannerProps) {
      const {category} = useContext(HmoContext)
      const {author} = useContext(HmoContext)
      const [title, setTitle] = useState(etitle);
      const [description, setDescription] = useState(edescription);
      const [slug, setSlug] = useState(etitle);
      const [brief, setBrief] = useState(ebrief);
      const [body, setBody] = useState(ebody);
      const [minutesRead, setMinutesRead] = useState(eminutesRead);
      const [imgUrl, setImgUrl] = useState(eimgUrl);
      const [authorId, setAuthorId] = useState(eauthor);
      const [categoryId, setCategoryId] = useState(ecategory);

      // handle submit
      const handleEdit = async (e: any) => {
            e.preventDefault();

            try {
              const categoryRef = doc(db, "articles", eid); // Reference to the specific document
              await updateDoc(categoryRef, {
                title: title,
                slug: slug,
                brief: brief,
                description: description,
                body: body,
                minutesRead: minutesRead,
                imgUrl: imgUrl,
                authorId: authorId,
                categoryId: categoryId,
                updatedOn: serverTimestamp()
              });

              // Reset form values
            //   console.log("Document successfully updated!");
            } catch (error) {
              console.error("Error updating document: ", error);
            }
      };
  return (
      <Sheet>
      <SheetTrigger asChild>
            <h1 className='cursor-pointer text-sm'>Edit</h1>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
      <SheetTitle>Edit Artikel</SheetTitle>
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
                              onChange={(e) => setAuthorId(e.target.value)}
                              className="col-span-3 border rounded-md p-2"
                              defaultValue={authorId}
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
                              onChange={(e) => setCategoryId(e.target.value)}
                              className="col-span-3 border rounded-md p-2"
                              defaultValue={categoryId}
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
            <Button onClick={handleEdit} type="submit">Save changes</Button>
      </SheetClose>
      </SheetFooter>
      </SheetContent>
</Sheet>
  )
}

export default EditArticle