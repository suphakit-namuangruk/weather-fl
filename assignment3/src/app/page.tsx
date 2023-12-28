export async function Home() {
  const res = await fetch("http://localhost:3001/49000");
  const data = await res.json();
  console.log(data);
  return {
    prop: {
      weather: data.weather,
      temp: data.temp,
      country: data.country,
      muang: data.name,
    },
  };
  return (
    <div>
      {data.map}
    </div>
  );
}
