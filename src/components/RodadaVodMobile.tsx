import { TableRow, TableCell } from "./ui/table";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";

export default function RodadaMobile({p1, p2, vod}: {p1: string, p2:string, vod?:string}) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
      <TableRow key={p1} className="text-center text-lg border-4 uppercase">
        <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]">{p1}</TableCell>
        <TableCell className="bg-textPurple/70 border-4 border-black/100 hover:bg-textPurple/50 size-[3rem]">VS</TableCell>
        <TableCell className="text-textPurple bg-white/70 border-4 border-black/100 hover:bg-white/50 w-[230px]">{p2}</TableCell>
      </TableRow>
      </DrawerTrigger>
      <DrawerContent className="align-center justify-center place-items-center bg-navbarGray">
        <DrawerHeader>
          <DrawerTitle className="text-center text-lg font-lemonmilk uppercase text-textPurple">VOD - {p1} vs {p2}</DrawerTitle>
        </DrawerHeader>
        <iframe className="ml-[0.4rem] align-center justify-center mb-8" src={vod ? `https://youtube.com/embed/${vod}` : 'https://youtube.com/embed/l7O9sBFsrfY'} width={320} height={240}/>
      </DrawerContent>
    </Drawer>
  )
}