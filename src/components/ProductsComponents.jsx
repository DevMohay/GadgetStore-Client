import React from 'react'
import hero1 from '../assets/hero1.png'
import apple from '../assets/apple.png'

function ProductsComponents() {
  return (
    <>
    <div className=" h-[22rem] w-[15rem] scndbg rounded-[16px] ">
                  <div className="image">
                    <img
                      src={hero1}
                      alt=""
                      className="p-3 cursor-pointer hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="details px-3">
                    <div className="heading flex h-6  justify-between">
                      <h1>Apple 15 Pro Max</h1>
                      <button className="btn text-white primarycolor px-2 rounded-md w-16 hover:primarycolor">Buy</button>
                    </div>
                    <div className="bottom mt-6 flex justify-between ">
                      <div className="image flex gap-2 items-center">
                        <img
                          src={apple}
                          alt=""
                          className="rounded-full bg-cover bg-center w-9 h-9 bg-white p-1"
                        />
                        <div className="">
                          <p className="text-[#a1a1a1] text-sm">Latest</p>{" "}
                          <h1 className="font-bold">Apple</h1>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-orange-00">Rating</span>
                        <h1 className="font-bold">$999</h1>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default ProductsComponents