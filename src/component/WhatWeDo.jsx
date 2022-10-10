import React from 'react'
import WhatWeDoo from '../img/WhatWeDo.png'

const WhatWeDo = () => {
    return (
        <div className="w-full bg-[#e1e9f1] px-10 py-12">
            <div className="w-[90%] h-full flex items-center justify-center">
                <div className="w-[50%] h-full flex items-center justify-center">
                    <img className="h-full max-h-[500px] object-cover" src={WhatWeDoo} alt="logo" />
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <div className="relative">
                        <div className="text-[30px]" >What we do</div>
                        <div className="ml-[30px] w-[200px] h-2 bg-[#5c5ca5]"></div>

                        <div className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, deserunt nisi architecto ipsam nulla magni quam molestiae illum culpa, alias repellat a ex accusamus quibusdam distinctio officiis suscipit quis recusandae.</div>

                        <div className="grid grid-cols-2 gap-6">
                            <div >
                                <div className="font-bold">Technical</div>
                                <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                            </div>
                            <div>
                                <div className="font-bold">Sports</div>
                                <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                            </div>
                            <div>
                                <div className="font-bold">Culture</div>
                                <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                            </div>
                            <div>
                                <div className="font-bold">Literature</div>
                                <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
