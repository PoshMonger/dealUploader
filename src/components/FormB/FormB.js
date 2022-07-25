import { TextField, Typography, Paper, Button, Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createBost, updateBost } from '../../actions/bosts'
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles'

import { useLayoutEffect } from "react";
const FormB = ({ currentId, setCurrentId }) => {
  function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;


  }
  const bost = useSelector((state) => (currentId ? state.bosts.bosts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const history = useHistory();
  const [width] = useMediaQuery();
  const [height] = useMediaQuery();
  const classes = useStyles();
  const [bostData, setBostData] = useState({
    title: '', message: '', selectedFile: ''
  });

  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (bost) setBostData(bost)

  }, [bost])
  const failure = () => {

    alert('Please Sign In to Make a Blog Post')
    history.push('./auth')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var date = new Date();
    var month = date.getMonth()
    var day = date.getDay()
    var year = date.getFullYear()

    date = month + '/' + day + '/' + year
    if (currentId === 0) {
      dispatch(createBost({ ...bostData, name: user?.result?.name, profPic: user?.result?.profPic, createdAt: date }));
      clear();
    } else {
      dispatch(updateBost(currentId, { ...bostData, name: user?.result?.name, profPic: user?.result?.profPic, createdAt: date }));
      clear();
    }
  };
  const clear = () => {
    setBostData({ title: '', message: '', selectedFile: '' })

  }
  if (!user?.result?.name) {
    return width < 1000 ? (
      <Paper className={classes.form} >

        <form  className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography>{currentId ? 'Editing' : ''}</Typography>
          <div className={classes.bostsmall}>
            <div className={classes.bostmobile}>
              <Avatar className={classes.avatar} >{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.avatar2}>Log In To Make A Post</Typography>  
            </div >
            <div className={classes.textfield}>
              <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={bostData.title}
                onChange={(e) => setBostData({ ...bostData, title: e.target.value })}
              ></TextField>
              <TextField
                name="message"
                variant="outlined"
                label="Message"
                multiline rows={4}
                fullWidth
                value={bostData.message}
                onChange={(e) => setBostData({ ...bostData, message: e.target.value })}
              ></TextField>
              <div className={classes.imageupload}>
                <Typography className={classes.avatar2}>Image Upload</Typography>

                <div className={classes.fileInput}><input type="file" multiple={false} onDone={({ base64 }) => setBostData({ ...bostData, selectedFile: base64 })} /></div>
              </div>
            </div>
            <Button variant="contained" onClick={failure}  className={classes.button}  >Submit</Button>
          <Button variant="contained"  className={classes.button}onClick={clear}>Clear</Button>
          </div>
       
        </form>
      </Paper>
    ) : (

      <Paper>

        <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography>{currentId ? 'Editing' : ''}</Typography>
          <div className={classes.bostpo}>
            <div className={classes.bost}>
              <Avatar className={classes.avatar} >{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.avatar2}>Log In To Make A Post</Typography>
            </div >
            <div className={classes.textfield}>
              <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={bostData.title}
                onChange={(e) => setBostData({ ...bostData, title: e.target.value })}
              ></TextField>
              <TextField
                name="message"
                variant="outlined"
                label="Message"
                multiline rows={4}
                fullWidth
                value={bostData.message}
                onChange={(e) => setBostData({ ...bostData, message: e.target.value })}
              ></TextField>
              <div className={classes.imageupload}>
                <Typography className={classes.avatar2}>Image Upload</Typography>

                <div className={classes.fileInput}><input type="file" multiple={false} onDone={({ base64 }) => setBostData({ ...bostData, selectedFile: base64 })} /></div>
              </div>
            </div>
            <div className={classes.buttonCont}>  <Button variant="contained" color="primary size=" large onClick={failure}  className={classes.button} >Submit</Button>
          <Button variant="contained" color="primary size=" large  className={classes.button}onClick={clear}>Clear</Button>

            </div>
          
          </div>
  
        </form>
      </Paper>
    )
  }


  return width < 1000 ? (
    <Paper>

      <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography>{currentId ? 'Editing' : ''}</Typography>
        <div className={classes.bostsmall}>
          <div className={classes.bost}>
            <Avatar className={classes.avatar} component={Link} to={`/creators2/${user?.result.name}`} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}</Avatar>
            <Typography>{user?.result.name}</Typography>
          </div >
          <div className={classes.textfield}>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={bostData.title}
              onChange={(e) => setBostData({ ...bostData, title: e.target.value })}
            ></TextField>
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              multiline rows={4}
              fullWidth
              value={bostData.message}
              onChange={(e) => setBostData({ ...bostData, message: e.target.value })}
            ></TextField>
            <div className={classes.imageupload}>
              <Typography className={classes.avatar2}>Image Upload</Typography>

              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader2" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader2').files[0];

                  //create a FileReader
                  var reader = new FileReader();

                  //image turned to base64-encoded Data URI.
                  reader.readAsDataURL(item);
                  reader.name = item.name;//get the image's name
                  reader.size = item.size; //get the image's size
                  reader.onload = function (event) {
                    var img = new Image();//create a image
                    img.src = event.target.result;//result is base64-encoded Data URI
                    img.name = event.target.name;//set name (optional)
                    img.size = event.target.size;//set size (optional)
                    img.onload = function (el) {
                      var elem = document.createElement('canvas');//create a canvas

                      //scale the image to 600 (width) and keep aspect ratio
                      var scaleFactor = resize_width / el.target.width;
                      elem.width = resize_width;
                      elem.height = resize_height;

                      //draw in canvas
                      var ctx = elem.getContext('2d');
                      ctx.drawImage(el.target, 0, 0, elem.width, elem.height);

                      //get the base64-encoded Data URI from the resize image
                      var srcEncoded = ctx.canvas.toDataURL('image/png', 1);

                      //assign it to thumb src
                      document.querySelector('#image2').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setBostData({ ...bostData, selectedFile: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image2'></img>
              </div>
            </div>
          </div>
          <Button className={classes.button} variant="contained" color="primary size="  type="submit">Submit</Button>
        <Button  className={classes.button}  variant="contained" color="primary size="   onClick={clear}>Clear</Button>
        </div>
    
      </form>
    </Paper>
  ) : (
    <Paper>

      <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography>{currentId ? 'Editing' : ''}</Typography>
        <div className={classes.bost1}>
          <div className={classes.bost}>
            <Avatar className={classes.avatar} component={Link} to={`/creators2/${user?.result.name}`} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}</Avatar>
            <Typography>{user?.result.name}</Typography>
          </div >
          <div className={classes.textfield}>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={bostData.title}
              onChange={(e) => setBostData({ ...bostData, title: e.target.value })}
            ></TextField>
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              multiline rows={4}
              fullWidth
              value={bostData.message}
              onChange={(e) => setBostData({ ...bostData, message: e.target.value })}
            ></TextField>
            <div className={classes.imageupload}>
              <Typography className={classes.avatar2}>Image Upload</Typography>

              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader').files[0];

                  //create a FileReader
                  var reader = new FileReader();

                  //image turned to base64-encoded Data URI.
                  reader.readAsDataURL(item);
                  reader.name = item.name;//get the image's name
                  reader.size = item.size; //get the image's size
                  reader.onload = function (event) {
                    var img = new Image();//create a image
                    img.src = event.target.result;//result is base64-encoded Data URI
                    img.name = event.target.name;//set name (optional)
                    img.size = event.target.size;//set size (optional)
                    img.onload = function (el) {
                      var elem = document.createElement('canvas');//create a canvas

                      //scale the image to 600 (width) and keep aspect ratio
                      var scaleFactor = resize_width / el.target.width;
                      elem.width = resize_width;
                      elem.height = resize_height;

                      //draw in canvas
                      var ctx = elem.getContext('2d');
                      ctx.drawImage(el.target, 0, 0, elem.width, elem.height);

                      //get the base64-encoded Data URI from the resize image
                      var srcEncoded = ctx.canvas.toDataURL('image/png', 1);

                      //assign it to thumb src
                      document.querySelector('#image').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setBostData({ ...bostData, selectedFile: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image'></img>
              </div>
            </div>
          </div>
          <div className={classes.buttonCont}> 
          <Button variant="contained" color="primary size="  className={classes.button} type="submit">Submit</Button>
        <Button variant="contained" color="primary size=" className={classes.button} onClick={clear}>Clear</Button>
        </div>
        </div>
        
      </form>
    </Paper>


  )
}

export default FormB
