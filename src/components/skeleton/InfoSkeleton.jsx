import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkeleton() {
    return (
        <div className='bg-fixed' id='skeleton-div'>
            <div className="flex flex-wrap flex-col px-8 items-start xxl:container xxl:px-20 xxl:m-auto justify-left lg:flex-row lg:items-center">
                <div className="lg:mr-10 mb-10 lg:mb-0 bg-fixed">
                    <div className="w-full h-full flex items-center justify-center"><Skeleton height={300} width={380} /></div>
                </div>
                <div className='flex flex-col items-start text-left justify-start lg:w-3/6 bg-fixed'>
                    <h1 className="mb-5"><Skeleton width={220} height={50} /></h1>
                    <div className="w-full h-full flex flex-col items-start justify-between lg:flex-row">
                        <div>
                            <h3 className='mb-3'><Skeleton count={5} className='mb-3' width={190} /></h3>
                        </div>
                        <div className="">
                            <h3 className='mb-3'><Skeleton count={3} className='mb-3' width={190} /></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton