import { useState } from 'react';
import './App.css';

function ProjectList({projects}) {
  const itemPerColumn = [Math.ceil(projects.length / 3)];
  const columns = [
    projects.slice(0, itemPerColumn),
    projects.slice(itemPerColumn, 2 * itemPerColumn),
    projects.slice(2 * itemPerColumn)
  ];

  return (
    <div className="projects">
      {columns.map( (column, columnInd) => (
        <div className='column' key={columnInd}>
          {column.map( (src, imgInd) => (
            <img className='cardImg' key={imgInd} src={src.img}/>
          ))}
        </div>
      ))}
    </div>
  );
}

function Toolbar({filters, onSelectFilter}) {

  const items = filters.map( filter => 
      <div 
        key={filter} className="filter" 
        onClick={() => onSelectFilter(filter)}
        style={{ 
          background: filter === selected ? "#000000" : "#ffffff",
          color: filter === selected ? "#ffffff" : "#000000",
         }}
      >
        {filter}
      </div> 
  );

  return ( 
    <div className="filters">
      {items}
    </div>
  );
}

function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = [ "All", "Websites", "Flayers" , "Business Cards"];

  const projects = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];
  
  const filteredProjects = selectedFilter === "All" 
      ? projects
      : projects.filter(project => project.category === selectedFilter);
  

  const onSelectFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className='container'>
      <Toolbar
        filters={filters}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects = {filteredProjects}/>
    </div>
  );
}

function App() {
  return (
    <Portfolio/>
  );
}

export default App;
