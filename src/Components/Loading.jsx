import { ring } from 'ldrs'
ring.register('l-ring');

export default function Loading() {
  return (
      <div className="loading" > <l-ring size="60" color="coral" > </l-ring ></div>
  )
}
