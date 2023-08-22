import { Suspense, lazy, useEffect, useState } from 'react';
import { API } from './api/api';
import { useStyles } from './AppStyle';
const LazyRacers = lazy(() => import('./components/Racers/Racers'))

export interface User {
  id: number,
  name: string,
  speed: number,
  color: string,
  time: number
}

function App() {
  const classes = useStyles()

  const [racers, setRacers] = useState<User[]>([])
  const [next, setNext] = useState('')
  const [previous, setPrevious] = useState('')


  useEffect(() => {
    API('https://devapi.almurut.com/api/test/racers/?format=json', setNext, setPrevious)
      .then((data) => setRacers(data))
  }, [])

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      API(next, setNext, setPrevious)
        .then((data) => setRacers((prev: User[]) => [...prev, ...data]))
    }
  }, [isIntersecting])

  return (
    <div className={classes.container}>
      <Suspense
        fallback={<h1>Загрузка...</h1>}
      >
        <LazyRacers
          racers={racers}
          isIntersecting={isIntersecting}
          setIsIntersecting={setIsIntersecting}
        />
      </Suspense>
    </div>
  );
}

export default App;