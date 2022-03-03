/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import profilePageStyle from "styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src="/img/jibril/jibril-profile-lax.jpg"
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Jibril Hartford</h3>
                  <h6>Lacrosse/Football Player</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer justify="center">
            <ul class="image-gallery-thumbnails-container">
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'hudl'});window.open('https://www.hudl.com/profile/9389123/jibril-hartford','_blank')}} color="hudl" style={{minWidth: '300px', maxWidth: '300px'}}>
                <img src="/img/jibril/hudl-icon.svg" type="image/svg+xml" style={{minWidth: '17px', maxWidth: '17px'}}></img>&nbsp;&nbsp;View On Hudl
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'twitter'});window.open('https://twitter.com/JibrilHartford','_blank')}} color="twitter" style={{minWidth: '300px'}}>
                <i className="fab fa-twitter" /> Connect on twitter
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'instagram'});window.open('https://www.instagram.com/jibrilhartford','_blank')}} color="instagram" style={{minWidth: '300px'}}>
                <i className="fab fa-instagram" /> Connect on Instgram
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'facebook'});window.open('https://www.facebook.com/jibrilhartford','_blank')}} color="facebook" style={{minWidth: '300px'}}>
                <i className="fab fa-facebook-square" /> Connect on Facebook
              </Button>
              </li>
              <li>
              <Button onClick={() => {dataLayer.push({'event': 'outbound_click', 'location': 'youtube'});window.open('https://www.youtube.com/channel/UCOeA4NU8uPT6QwCFXspvATQ','_blank')}} color="youtube" style={{minWidth: '300px'}}>
                <i className="fab fa-youtube" /> View On Youtube
              </Button>
              </li>
              </ul>
          </GridContainer>
          <br />
          <br />
          <br />
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.center}>
              &copy; {1900 + new Date().getYear()} , Jibril Hartford
            </div>
          </div>
        }
      />
    </div>
  );
}
