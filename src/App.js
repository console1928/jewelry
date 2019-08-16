import React from 'react';
import burgerMenu from './images/burger-menu.png';
import dielLogo from './images/diel-logo.png';
import diamond from './images/diamond.svg';
import vector from './images/vector.png';
import like from './images/like.png';
import glass from './images/glass.png';
import phone from './images/phone.png';
import slider1 from './images/slider1.svg';
import slider2 from './images/slider2.svg';
import sliderButton from './images/slider-button.png';
import sliderButtonActive from './images/slider-button-active.png';
import advantages1 from './images/advantages1.png';
import advantages2 from './images/advantages2.png';
import advantages3 from './images/advantages3.png';
import './App.css';

class App extends React.Component {
  constructor(props, state) {
      super(props, state);

      this.state = {
        sliderStage: 1
      };
  }

  sliderInterval = null;

  componentDidMount() {
    if (document.body.clientWidth > 751) {
      this.handleSlider();
    }
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    clearInterval(this.sliderInterval);
    if (document.body.clientWidth > 751) {
      this.handleSlider();
    }
  }

  handleSlider = () => {
    this.sliderInterval = setInterval(() => {
      this.setState(prevState => ({ sliderStage: prevState.sliderStage === 1 ? 2 : 1 }));
    }, 3000);
  }

  render() {
    return (
      <div className={"main"}>
        <div className={"aside"}>
          <div className={"aside-logo-container"}>
            <img className={"aside-logo"} src={dielLogo} />
          </div>
          <div className={"aside-menu-action-group"}>
            <div className={"aside-menu-action-button"}><img src={phone} width={"25px"} /></div>
            <div className={"aside-menu-action-button"}><img src={glass} width={"25px"} /></div>
            <div className={"aside-menu-action-button"}><img src={like} width={"25px"} /></div>
          </div>
          <div className={"aside-image-container"}>
            <img src={diamond} />
          </div>
        </div>
        <div
          style={{
              position: "absolute",
              opacity: this.state.sliderStage === 1 ? 1 : 0
            }}
          className={"main-image-container-1"}
        >
          <img className={"image-slider1"} src={slider1} />
        </div>
        <div
          style={{
              position: "relative",
              opacity: this.state.sliderStage === 2 ? 1 : 0
            }}
          className={"main-image-container-2"}
        >
          <img className={"image-slider2"} src={slider2} />
        </div>
        <div className={"slider-buttons-container"}>
          <div
            className={"slider-button-1"}
            onClick={() => this.setState({ sliderStage: 1 })}
          >
            <img src={this.state.sliderStage === 1 ? sliderButtonActive : sliderButton} />
          </div>
          <div
            className={"slider-button-2"}
            onClick={() => this.setState({ sliderStage: 2 })}
          >
            <img src={this.state.sliderStage === 2 ? sliderButtonActive : sliderButton} />
          </div>
          <div className={"slider-button-3"}><img src={sliderButton} /></div>
        </div>
        <div className={"top-menu"}>
          <div className={"top-menu-button-1"}>
            <img src={burgerMenu} />
          </div>
          <div className={"top-menu-button-2"}>{"КАТАЛОГ"}</div>
          <div className={"top-menu-button-3"}>{"КОЛЛЕКЦИИ"}</div>
          <div className={"top-menu-button-4"}>{"СКИДКИ И АКЦИИ"}</div>
          <div className={"top-menu-action-group"}>
            <div className={"top-menu-action-button-1"}><img src={glass} width={"25px"} /></div>
            <div className={"top-menu-action-button-2"}><img src={phone} width={"25px"} /></div>
            <div className={"top-menu-action-button-3"}><img src={like} width={"25px"} /></div>
            <div className={"top-menu-action-button-4"}><img src={burgerMenu} /></div>
          </div>
        </div>
        <div className={"title-description"}>
          {"Эксклюзивные украшения от ювелирного дома «DIEL»  —  это произведения искусства в жанре Haute Joaillerie. "}
          <div className={"title-description-link"}>
            {"Подробнее"}
            <img className={"title-description-vector"} src={vector} width={"34px"} />
          </div>
        </div>
        <div className={"title"}>
          <span className={"title-first"}>{"ЮВЕЛИРНЫЙ "}</span>
          <br/>
          <span className={"title-second"}>{"ДОМ DIEL"}</span>
        </div>
        <div className={"advantages-container"}>
          <div className={"advantages-header"}>
            {"ПРЕИМУЩЕСТВА"}
          </div>
          <div className={"advantages-items"}>
            <div className={"advantages-item-1"}>
              <img className={"advantages-image"} src={advantages1} />
              <div className={"advantages-item-header"}>{"Верный спутник надежности – качество"}</div>
              <div className={"advantages-item-text"}>
                {`Несколько производственных площадок в разных городах, более 300 
                  мастеров, современное оборудование, новейшие технологии, 
                  прототипирование, жесткая система проверок и многоступенчатый`}
              </div>
              <div className={"advantages-link"}>
                {"Подробнее"}
                <img className={"title-description-vector"} src={vector} width={"34px"} />
              </div>
            </div>
            <div className={"advantages-item-2"}>
              <img className={"advantages-image"} src={advantages2} />
              <div className={"advantages-item-header"}>{"Верный спутник надежности – качество"}</div>
              <div className={"advantages-item-text"}>
                {`Несколько производственных площадок в разных городах, более 300 
                  мастеров, современное оборудование, новейшие технологии, 
                  прототипирование, жесткая система проверок и многоступенчатый`}
              </div>
              <div className={"advantages-link"}>
                {"Подробнее"}
                <img className={"title-description-vector"} src={vector} width={"34px"} />
              </div>
            </div>
            <div className={"advantages-item-3"}>
              <img className={"advantages-image"} src={advantages3} />
              <div className={"advantages-item-header"}>{"Верный спутник надежности – качество"}</div>
              <div className={"advantages-item-text"}>
                {`Несколько производственных площадок в разных городах, более 300 
                  мастеров, современное оборудование, новейшие технологии, 
                  прототипирование, жесткая система проверок и многоступенчатый`}
              </div>
              <div className={"advantages-link"}>
                {"Подробнее"}
                <img className={"title-description-vector"} src={vector} width={"34px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
