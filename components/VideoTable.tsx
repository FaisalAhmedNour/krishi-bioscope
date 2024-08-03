"use client"

import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit, Trash2 } from "lucide-react"
import VideoAddForm from "./VideoAddForm"
import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns"

// const Videos = [
//   {
//     title: "INV001",
//     caterories: ["Paid", "Unpaid"],
//     date: "$250.00",
//     link: "Credit Card",
//   },
//   {
//     title: "INV001",
//     caterories: ["Paid", "Unpaid"],
//     date: "$250.00",
//     link: "Credit Card",
//   }
// ]

export function VideoTable() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        console.log("videos : ", response)
        setVideos(response.data.data);
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchVideos()
  }, [])

  return (
    <Table className="border">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px]">Sl No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Caterories</TableHead>
          <TableHead className="text-right">Date</TableHead>
          <TableHead></TableHead>
          <TableHead className="text-center w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videos?.map((video, index) => {
          // const date = new Date(video?.date)
          // const viewDate = `${date.getDate()}`
          return (<TableRow key={index}>
            <TableCell>{index < 9 && 0}{index + 1}</TableCell>
            <TableCell className="font-medium">{video.title}</TableCell>
            <TableCell className="flex flex-wrap gap-1">
              {video?.categories?.map((category, index) => (
                <span key={index}>{category.name}{index !== video?.categories?.length - 1 && ','}</span>
              ))}
            </TableCell>
            <TableCell className="text-right whitespace-nowrap">{format(video?.date, "PPP")}</TableCell>
            <TableCell className="text-right">
              <Link
                href={video?.link}
                className="underline cursor-pointer text-blue-500"
              >Preview</Link>
            </TableCell>
            <TableCell className="flex justify-center items-center gap-2">
              <Edit className="h-5 w-5 text-blue-600" />
              <Trash2 className="h-5 w-5 text-red-600" />
            </TableCell>
          </TableRow>)
        }
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}></TableCell>
          <TableCell colSpan={2} className="text-center">
            <VideoAddForm />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
