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
import { HmoContext } from '../../../../context/hmoContext'
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { RiMoreLine } from "react-icons/ri";
import EditCategory from '@/components/material/admin/category/editCategory'
import EditAuthor from '@/components/material/admin/author/editAuthor'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import EditPilar from '@/components/material/admin/pilar/EditPilar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
    

function Pilar() {
      const {pilars} = useContext(HmoContext)
      const [name, setName] = useState('');
      const [role, setRole] = useState('');
      const [imgUrl, setImgUrl] = useState('');

      // handle submit
      const handleSubmit = async (e: any) => {
            e.preventDefault();
        
            try {
              await addDoc(collection(db, "pilars"), {
                name: name,
                role: role,
                imgUrl: imgUrl,
                updatedOn: serverTimestamp()
              });
        
              // Reset form values
              setName('');
              setRole('');
              setImgUrl('');
        
              console.log("Document successfully written!");
            } catch (error) {
              console.error("Error writing document: ", error);
            }
      };

      const handleDelete = async (id: string) => {
              try {
                await deleteDoc(doc(db, "pilars", id)); // Delete document based on its Firestore ID
                // console.log("Document successfully deleted!");
              } catch (error) {
                console.error("Error deleting document: ", error);
              }
      };

  return (
    <>
    <NavHeader title="List Pilar" />
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="w-full flex flex-col space-y-5">
            <div className="w-full flex items-center justify-between">
                  <h1 className='text-2xl font-semibold'>Pilar POSEIDON</h1>
                  <Sheet>
                        <SheetTrigger asChild>
                        <Button variant="outline">Tambah Baru</Button>
                        </SheetTrigger>
                        <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Tambah Pilar</SheetTitle>
                        <SheetDescription>
                              Make changes here. Click save when you&apos;re done.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="imgUrl" className="text-right">
                              Photo Url
                              </Label>
                              <Input id="imgUrl"
                              value={imgUrl}
                              onChange={(e) => setImgUrl(e.target.value)}
                              className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                              Name
                              </Label>
                              <Input id="name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="description" className="text-right">
                              Description
                              </Label>
                              <Input id="description" 
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              className="col-span-3" />
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
                  <TableCaption>A list of your article&apos;s categories.</TableCaption>
                  <TableHeader>
                  <TableRow>
                        <TableHead className="w-[100px]">photo</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                  </TableHeader>
                  <TableBody>
                  {pilars.map((item) => (
                        <TableRow key={item.id}>
                              <TableCell>
                              <Avatar>
                                    <AvatarImage src={`${item.data.imgUrl}`} />
                                    <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              </TableCell>
                              <TableCell className="font-semibold">{item.data.name}</TableCell>
                              <TableCell>{item.data.role}</TableCell>
                              <TableCell className="text-right">
                                    <Popover>
                                          <PopoverTrigger>
                                          <RiMoreLine className='w-5 h-5' />
                                          </PopoverTrigger>
                                          <PopoverContent className='w-[100px] gap-y-3'>
                                                <EditPilar eid={item.id} etitle={item.data.name} erole={item.data.role} eimgUrl={item.data.imgUrl} />
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

export default Pilar