import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkeleton() {
    return (
        <div className="bg-white">
            <div className="w-full h-auto mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto">
                <div className="w-64 h-36">
                    <div className="w-full h-full flex items-center justify-center"><Skeleton height={130} width={234} /></div>
                </div>
                <div className="w-64 h-full px-5 py-6">
                    <h1 className="text-2xl mb-5"><Skeleton /></h1>
                    <h3><Skeleton count={3} /></h3>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton