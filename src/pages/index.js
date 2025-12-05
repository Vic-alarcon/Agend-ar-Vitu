import Carousel from "@/components/carousel/Carousel";


export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{fontSize: '25px', marginTop: '10px'}}>EVENTOS DESTACADOS</h1>
      <Carousel/>
    </div>
  );
}