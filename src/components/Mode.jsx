import { useState, useEffect } from "react"

function Mode() {
    const [handleToggle, setHandleToggle] = useState(false)


    useEffect(() => {
        document.body.setAttribute('class', handleToggle)
    }, [handleToggle])

    return (
        <div className="flex items-center cursor-pointer select-none" onClick={() => setHandleToggle(!handleToggle)}>
            <span><i className="fa-regular fa-moon"></i> {/*<i className="fa-solid fa-sun"></i>*/}</span>
            <h3 className="text-md font-medium ml-2">Dark Mode</h3>
        </div>
    )
}

export default Mode