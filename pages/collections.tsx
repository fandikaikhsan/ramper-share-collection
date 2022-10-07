// render react page
import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const arrayCollection = [
  {
    id: 1,
    name: "Collection 1",
    description: "Collection 1 Description",
    image: "https://picsum.photos/200/300",
    total: 10,
    price: 100000,
  },
  {
    id: 2,
    name: "Collection 2",
    description: "Collection 2 Description",
    image: "https://picsum.photos/200/300",
    total: 10,
    price: 100000,
  },
  {
    id: 3,
    name: "Collection 3",
    description: "Collection 3 Description",
    image: "https://picsum.photos/200/300",
    total: 10,
    price: 100000,
  },
]

const Collection: NextPage = () => {
  return (
    <>
      <div>
        <h1>Collection Page</h1>
      </div>
      <div>
        <div>
          {arrayCollection.map((item) => (
            <div key={item.id}>
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
