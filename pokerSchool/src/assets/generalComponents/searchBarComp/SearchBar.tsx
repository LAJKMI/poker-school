import './searchBox.css'

interface SearchProps {
    setSearch: (term: string) => void
    id?: string
}

export default function SearchBar({ setSearch, id = '' }: SearchProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="searchBox" id={id}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            <input type="text" placeholder="Search" onChange={handleChange} />
        </div>
    )
}
