import './Home.css';
import { useLocation } from "react-router-dom";
import { React, useState } from 'react';
import ReactPlayer from 'react-player';
function Discription() {
  const location = useLocation();
  const title = location.state?.title;
  const image = location.state?.image;
  const discription = location.state?.disp;
  const Genre = location.state?.genre;
  const rstatus = location.state?.rstatus;
  const rating = location.state?.rating;
  const eplist = location.state?.eplist;

  // const episodeTitles = Object.keys(eplist).sort();
  const episodeTitles = Object.keys(eplist).sort((a, b) => parseInt(a) - parseInt(b));
  const initialEpisodeTitle = episodeTitles[episodeTitles.length-1];
  const [selectedEpisode, setSelectedEpisode] = useState(initialEpisodeTitle);
  const [selectedEpisodeTitle, setselectedEpisodeTitle] = useState(initialEpisodeTitle);

  const [played, setPlayed] = useState(0);
  const handleProgress = (state) => {
    setPlayed(state.played);
  };
  const handleSeek = (value) => {
    setPlayed(value);
  };


  const handleEpisodeClick = (eptitle) => {
    if (eplist[eptitle]) {
      setSelectedEpisode(eptitle);
      console.log(eplist[eptitle])
      setselectedEpisodeTitle(eptitle)
    } else {
      setSelectedEpisode(null);
    }
  };

  return (

    <div>
      <div className='main'>
        <div className='Disp'>
          <h1>{title}</h1>
        </div>
        <div className='container'>
          <div className='row Discription' >
            <div className='col-md-3'>
              <div className='disbody'>
                <img src={image} alt={`${title} Poster`} className='dispimg'/>
              </div>
              <div className='discription'>
                {discription}
                <div>
                  <br />
                  <div className='detail'>
                    <h5><b>Genre : </b>{Genre}</h5>
                    <h5><b>Language : </b>English</h5>
                    <h5><b>Status : </b>{rstatus}</h5>
                    <h5><b>Rating : </b>{rating}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div style={{color:'aliceblue',textAlign:'center',padding:'15px'}}><h3>{selectedEpisodeTitle}</h3></div>
              <div>
                <ReactPlayer

                  url={eplist[selectedEpisode]}
                  playing={false}
                  controls={true}
                  progress={played}
                  onProgress={handleProgress}
                  onSeek={handleSeek}
                  width="100%"
                  height="100%"
                  alt="Video"
                />
              </div>
            </div>
            <div className='col-md-3'>
              <h3 className='h3'>Episode List</h3>
              <div className='episodes'>
                
                  {eplist &&
                    Object.keys(eplist)
                      .sort((a, b) => parseInt(b.split(".")[0]) - parseInt(a.split(".")[0]))
                      .map((eptitle, index) => (
                        <p key={eptitle} onClick={() => handleEpisodeClick(eptitle)}>
                          {`Ep : ${eptitle}`}
                        </p>
                      ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Discription;