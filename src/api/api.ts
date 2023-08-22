import { User } from "../App"

export const API = (url: string, setNext: React.Dispatch<React.SetStateAction<string>>, setPrevious: React.Dispatch<React.SetStateAction<string>>): Promise<User[]> => {
    return new Promise(resolve => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const newData = data.results.map((el: User) => {
                    return { ...el, color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), time: Math.floor(Math.random() * 100) }
                })

                setNext(data.next)
                setPrevious(data.previous)
                resolve(newData)
            })
    })
}