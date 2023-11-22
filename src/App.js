import adhamya from './assets/ocean.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar bg-black">
        <h1 className='header'>
          V-TUBE
        </h1>
      </div>

      <div className='content-wrap'>
      <div className='menu'>
  <h2><svg class="h-8 w-8 text-white-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>

    </svg>Home</h2>


  <h2><svg class="h-8 w-8 text-white-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>

    Clubs</h2>


  <h2>
    <svg class="h-8 w-8 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="9" y1="6" x2="20" y2="6" />  <line x1="9" y1="12" x2="20" y2="12" />  <line x1="9" y1="18" x2="20" y2="18" />  <line x1="5" y1="6" x2="5" y2="6.01" />  <line x1="5" y1="12" x2="5" y2="12.01" />  <line x1="5" y1="18" x2="5" y2="18.01" /></svg>Event-list</h2>
  <h2><svg class="h-8 w-8 text-white-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>Social-Handles</h2>

</div>
        <div className='home'>
<video src={adhamya} alt='adhamya' autoPlay muted>
  </video>
          
          
</div> 
        
      </div>
    
  </div>  
  );
}

export default App;
