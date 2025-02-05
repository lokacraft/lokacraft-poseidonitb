
import React, { useState } from 'react'
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

interface BannerProps {
  eid: string;
  etitle: string;
  erole: string;
  eimgUrl: string;

}

function EditPilar({eid, etitle, erole, eimgUrl}: BannerProps) {
      // const {category} = useContext(HmoContext)
      const [name, setName] = useState(etitle);
      const [role, setRole] = useState(erole);
      const [imgUrl, setImgUrl] = useState(eimgUrl);

      // handle submit
      const handleEdit = async (e: any) => {
            e.preventDefault();

            try {
              const categoryRef = doc(db, "pilars", eid); // Reference to the specific document
              await updateDoc(categoryRef, {
                name: name,
                role: role,
                imgUrl: imgUrl,
                updatedOn: serverTimestamp()
              });
            //   setName("")
            //   setRole("")
            //   setImgUrl("")

              // Reset form values
            //   console.log("Document successfully updated!");
            } catch (error) {
              console.error("Error updating document: ", error);
            }
      };
  return (
      <Sheet>
      <SheetTrigger asChild>
            <h1>Edit</h1>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
      <SheetTitle>Edit {name}</SheetTitle>
      <SheetDescription>
            Make changes here. Click save when you&apos;re done.
      </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            Photo Url
            </Label>
            <Input id="name" 
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
            <Button onClick={handleEdit} type="submit">Save changes</Button>
      </SheetClose>
      </SheetFooter>
      </SheetContent>
</Sheet>
  )
}

export default EditPilar