const url = 'https://api.themoviedb.org/4/account/6456b83832cc2b00fe7c99f7/tv/recommendations?page=1&language=en-US';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWI4NjllMjA4ZTdmNDVmZTVlODI1NWIwZTBlNTU2MCIsIm5iZiI6MTcyMzYzMDkzOS4wNTc1Niwic3ViIjoiNjQ1NmI4MzgzMmNjMmIwMGZlN2M5OWY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.2q4fdGqyIHkmh2ZBwMe9K4G4HKGdn49ANJDmu9HVHYA'
    }
  };
async function tvShowApi() {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();      
      return json.results;
    } catch (err) {
      console.error('Error:', err);
      return null;
    }
  }
  
  export default tvShowApi;
  
