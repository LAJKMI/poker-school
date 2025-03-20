import './sectionHeading.css'

interface SectionHeadingProps {
    heading: string
    info?: string
}

export default function SectionHeading({ heading, info }: SectionHeadingProps) {
    return (
        <>
            <h3 id='sectionHeading'>{heading}</h3>
            {info && <p id="sectionInfo">{info}</p>}
        </>
    )
}
