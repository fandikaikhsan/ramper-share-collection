// render react page
import React from "react"
import { NextPage } from "next"
import Image from "next/image"
import { arrayCollection } from "./api/collections"

const Collection: NextPage = () => {
  return (
    <>
      <div>
        <h1>Collection Page</h1>
      </div>
      <div className=" mx-auto p-12">
        <div className="flex gap-8">
          {arrayCollection.map((item) => (
            <div key={item.id} className="bg-gray-500 border rounded-md p-5">
              <div>
                <Image src={item.image} alt="" width={200} height={300} />
              </div>
              <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.total}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Collection
