import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Card, Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    expireDate: '', city: '', state: '', zipcode: '', doors: '', annualexpenses: '', acreage: '', message: '', address: '', email: '',
    squareFoot: '', listPrice: '', bedBath: '', tags: [], costofrepairs: '', parcelnum: '', enviroprobs: '', comparableurl: '', virtualtoururl: '', zoning: '', NOI: '',
    selectedFilerentroll: '', selectedFileproforma: '', selectedFile1: '', selectedFile2: '', selectedFile3: '',
    selectedFile4: '', selectedFile5: '', selectedFile6: '', selectedFile7: '', type: 'buyandhold'
  });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());
  const clear = () => {
    setCurrentId(0);
    setPostData({
      expireDate: '', city: '', state: '', zipcode: '', doors: '', annualexpenses: '', type: 'buyandhold', acreage: '', message: '', tags: [], address: '',
      email: '', squareFoot: '', listPrice: '', bedBath: '', costofrepairs: '', parcelnum: '', enviroprobs: '',
      comparableurl: '', virtualtoururl: '', zoning: '', NOI: '', selectedFilerentroll: '', selectedFileproforma: '', selectedFile2: '',
      selectedFile1: '', selectedFile3: '', selectedFile4: '', selectedFile5: '', selectedFile6: '', selectedFile7: ''
    });
  };


  useEffect(() => {

    if (post) setPostData(post);
  }, [post]);



  const validate = () => {

    let emailError = "";
    let addressError = "";
    let bedBathError = "";
    let messageError = "";
    let listPriceError = "";
    let tagsError = "";

    let squareFootError = "";
    let noiError = "";
    let costofrepairsError = "";
    let annualexpensesError = "";



    if (!postData.email.includes("@")) {
      emailError = "Email Format Requires '@'";
    }

    if (!postData.email) {
      emailError = "Please Enter Email";
    }


    if (!postData.address) {
      addressError = "Please Enter an Address";
    }

    if (postData.address.length > 75) {
      addressError = "Address Cannot Exceed 75 Characters";
    }

    if (!postData.bedBath) {
      bedBathError = "Please Enter a Bed/Bath";
    }

    if (postData.bedBath.length > 8) {
      bedBathError = "Bed/Bath Cannot Exceed 25 Characters";
    }

    if (!postData.message) {
      messageError = "Please Enter a Post Description";
    }

    if (postData.message.length > 2000) {
      messageError = "Description Cannot Exceed 2000 Characters";
    }
    if (!postData.tags) {
      tagsError = "Please Add Tags So Others Can Search For Your Post";
    }

    if (postData.tags.length > 15) {
      tagsError = "Tags Cannot Exceed 8 Characters";
    }




    if (!postData.squareFoot) {
      squareFootError = "Please Enter Square Footage";
    }

    if (postData.squareFoot.length > 25) {
      squareFootError = "Square Footage Cannot Exceed 25 Characters";
    }






    if (costofrepairsError) {
      alert(costofrepairsError)
      return false
    }


    if (annualexpensesError) {
      alert(annualexpensesError)
      return false
    }



    if (noiError) {
      alert(noiError)
      return false
    }
    if (squareFootError) {
      alert(squareFootError)
      return false;
    }



    if (tagsError) {
      alert(tagsError)
      return false;
    }
    if (listPriceError) {
      alert(listPriceError)
      return false;
    }
    if (messageError) {
      alert(messageError)
      return false;
    }



    if (addressError) {
      alert(addressError)
      return false;
    }
    if (bedBathError) {
      alert(bedBathError)
      return false;
    }




    if (emailError) {
      alert(emailError)
      return false;
    }



    return true;

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name, expireDate: startDate, profpic: user?.result?.imageUrl || user?.result?.profPic }, history));

        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, profpic: user?.result?.imageUrl || user?.result?.profPic }));
        history.push('/');
        clear();
      }
    }

  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Card className={classes.privpolcard}>
          <text variant="h6" align="center">
            Please Sign In to create your own listing and like other's listings.
          </text>
        </Card>

        <Card className={classes.privpolcard}>

        </Card>
      </Paper>


    );


  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };



  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        minHeight: '100vh',
        marginTop: '100px'
      }}
    >
      <Grid  item  xs={12} md={12} lg={12} sm={12}>


     

        <form  alignItems="center" justify="center" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

          <Grid  alignItems="center" justify="center" item xs={12} md={12} sm={12}>






            <Card className={classes.card}>
              <text variant="h6">{currentId ? `Editing "${post?.address}"` : <text className={classes.heading} variant='h4' align='center'> Post a Buy And Hold</text>}</text>
              <Divider style={{ margin: '20px 0' }} />




              <TextField className={classes.textfield} name="address" variant="outlined" label="Street Address" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })} />
              <TextField className={classes.textfield} name="city" variant="outlined" label="City" fullWidth value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
              <TextField className={classes.textfield} name="state" variant="outlined" label="State" fullWidth value={postData.state} onChange={(e) => setPostData({ ...postData, state: e.target.value })} />
              <TextField className={classes.textfield} name="zipcode" variant="outlined" label="Zip Code" fullWidth value={postData.zipcode} onChange={(e) => setPostData({ ...postData, zipcode: e.target.value })} />


            </Card>






            <Card className={classes.card}>



              *Please Do Not Use Commas*
              <TextField name="listPrice" variant="outlined" label="Asking Price" fullWidth value={postData.listPrice} onChange={(e) => setPostData({ ...postData, listPrice: e.target.value })} />
              <TextField name="costofrepairs" variant="outlined" label="Cost Of Repairs" fullWidth value={postData.costofrepairs} onChange={(e) => setPostData({ ...postData, costofrepairs: e.target.value })} />


              <Divider style={{ margin: '20px 0' }} />

            </Card>
          </Grid>
          <Grid item  xs={12} md={12} lg={12} sm={12}>
            <Card className={classes.card}>

              *Please Do Not Use Commas*
              <TextField name="squareFoot" variant="outlined" label="Square Footage" fullWidth value={postData.squareFoot} onChange={(e) => setPostData({ ...postData, squareFoot: e.target.value })} />
              <TextField name="acreage" variant="outlined" label="Acreage" fullWidth value={postData.acreage} onChange={(e) => setPostData({ ...postData, acreage: e.target.value })} />
              <TextField name="doors" variant="outlined" label="Doors" fullWidth value={postData.doors} onChange={(e) => setPostData({ ...postData, doors: e.target.value })} />

              <TextField name="bedBath" variant="outlined" label="bedBath" fullWidth value={postData.bedBath} onChange={(e) => setPostData({ ...postData, bedBath: e.target.value })} />





            </Card>
          </Grid>


          <Grid item  xs={12} md={12} lg={12} sm={12}>
            <Card className={classes.card}>




              <TextField name="enviroprobs" variant="outlined" label="Environmental Problems" fullWidth value={postData.enviroprobs} onChange={(e) => setPostData({ ...postData, enviroprobs: e.target.value })} />


              <TextField name="zoning" variant="outlined" label="Zoning" fullWidth value={postData.zoning} onChange={(e) => setPostData({ ...postData, zoning: e.target.value })} />
              <TextField name="NOI" variant="outlined" label="NOI" fullWidth value={postData.NOI} onChange={(e) => setPostData({ ...postData, NOI: e.target.value })} />
              <TextField name="annualexpenses" variant="outlined" label="Annual Expenses" fullWidth value={postData.annualexpenses} onChange={(e) => setPostData({ ...postData, annualexpenses: e.target.value })} />





            </Card>
          </Grid>
          <Grid item  xs={12} md={12} lg={12} sm={12}>
            <Card className={classes.card}>

              <TextField name="parcelnum" variant="outlined" label="Parcel #" fullWidth value={postData.parcelnum} onChange={(e) => setPostData({ ...postData, parcelnum: e.target.value })} />

              <TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />

              <TextField name="comparables url" variant="outlined" label="Comparables Url" fullWidth value={postData.comparableurl} onChange={(e) => setPostData({ ...postData, comparableurl: e.target.value })} />
              <TextField name="virtualtoururl" variant="outlined" label="Virtual Tour Url" fullWidth value={postData.virtualtoururl} onChange={(e) => setPostData({ ...postData, virtualtoururl: e.target.value })} />
              <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

              <ChipInput
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={postData.tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
              />
              <text className={classes.tagsdesc} variant="h6">Press "Enter" to create Tag</text>
              *Although adding tags is not required, it is strongly encouraged so that others can more easily saerch for your post*



            </Card>
          </Grid>

          <Grid item  xs={12} md={12} lg={12} sm={12}>
            <Card className={classes.card}>
              <text className={classes.tagsdesc} variant="h6">Pro Forma/ Rent Roll Document Upload (JPG,JPEG,png, ...)</text>

              <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFileproforma: base64 })} /></div>
              <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFilerentroll: base64 })} /></div>
            </Card>

          </Grid>
          <Grid item  xs={12} md={12} lg={12} sm={12}>
            <Card className={classes.card}>
              <text variant="h5">Last Day to Assign</text>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <Divider style={{ margin: '20px 0' }} />
              <text variant="h5">Cover Photo</text>

              <text variant="h5">Cover Photo</text>
              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader1" onChange={


                () => {

                  var resize_width = 500;//without px
                  var resize_height = 500;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader1').files[0];

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
                      document.querySelector('#image1').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile1: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image1'></img>
              </div>
              <Divider style={{ margin: '20px 0' }} />

              <text variant="h5">Additional Photos</text>
              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader2" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;
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
                      setPostData({ ...postData, selectedFile2: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image2'></img>
              </div>
              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader3" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader3').files[0];

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
                      document.querySelector('#image3').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile3: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image3'></img>
              </div>
              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader4" onChange={


                () => {
                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader4').files[0];

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
                      document.querySelector('#image4').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile4: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image4'></img>
              </div>


              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader5" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px

                  //get the image selected
                  var item = document.querySelector('#uploader5').files[0];

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
                      document.querySelector('#image5').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile5: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image5'></img>
              </div>



              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader6" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader6').files[0];

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
                      document.querySelector('#image6').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile6: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image6'></img>
              </div>
              <div className={classes.fileInput}><input type="file" multiple={false} id="uploader7" onChange={


                () => {

                  var resize_width = 250;//without px
                  var resize_height = 250;//without px
                  //get the image selected
                  var item = document.querySelector('#uploader7').files[0];

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
                      document.querySelector('#image7').src = srcEncoded;

                      /*Now you can send "srcEncoded" to the server and
                      convert it to a png o jpg. Also can send
                      "el.target.name" that is the file's name.*/
                      setPostData({ ...postData, selectedFile7: srcEncoded })
                      console.log('resized')
                    }
                  }


                }
              }





              />
                <img id='image7'></img>
              </div>
              <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Submit</Button>
              <Button variant="contained" onClick={clear} fullWidth>Clear</Button>
            </Card>
          </Grid>

        </form>

      </Grid>
    </Grid>
  );
};

export default Form;
