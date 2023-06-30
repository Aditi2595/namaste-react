import { useState } from "react"

const Section = ({title, description, isVisible, setisVisible}) => {
    // const [isVisible, setisVisible] = useState(false)
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold">{title}</h3>
            
            {console.log(setisVisible)}
            {(isVisible) ? (<button onClick={()=> setisVisible(false)}>Hide</button>) : 
            (<button onClick={()=> setisVisible(true)}>Show</button>)}
            {console.log(isVisible)}
            {isVisible && <p>{description}</p>}
            
        </div>
    )
}

const Instamart = () => {
    const [isVisibleSection, setisVisibleSection] = useState("")
    return (<div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart Page</h1>
        <Section title={'About Instamart'} 
        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
        isVisible = {isVisibleSection === "about"}
        
        setisVisible = {() => {
            setisVisibleSection("about")
        }}
        />
        {/* <Section title={'Details of Instamart'} 
        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
        isVisible = {isVisibleSection === "details"}
        setisVisible = {() => {
            setisVisibleSection("details")
        }}
        />
        <Section title={'Team of Instamart'} 
        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
        isVisible = {isVisibleSection === "team"}
        setisVisible = {() => {
            setisVisibleSection("team")
        }}
        /> */}

    </div>
    )
}
export default Instamart;