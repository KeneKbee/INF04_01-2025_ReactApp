import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function Photos()
{
    const [data, setData] = useState([{id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
                                      {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
                                      {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
                                      {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
                                      {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
                                      {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
                                      {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
                                      {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
                                      {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
                                      {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
                                      {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
                                      {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}]);

    const [flowersCheck, setFlowersCheck] = useState(true);
    const [animalsCheck, setAnimalsCheck] = useState(true);
    const [carsCheck, setCarsCheck] = useState(true);

    function updateFilter(e)
    {
        if(e.target.id == "flowers")
        {
            setFlowersCheck(e.target.checked);
        }
        else if(e.target.id == "animals")
        {
            setAnimalsCheck(e.target.checked);
        }
        else if(e.target.id == "cars")
        {
            setCarsCheck(e.target.checked);
        }
    }

    function download(id)
    {
        let tempData = data;
        for(const img of tempData)
        {
            if(img.id === id)
            {
                img.downloads++;
            }
        }

        setData([...tempData]);
    }

    return(
        <div>
            <h1>Kategorie zdjęć.</h1>
            <div className="form-check form-switch form-check-inline">
                <input className="form-check-input" type="checkbox" id="flowers" onChange={updateFilter} defaultChecked/>
                <label className="form-check-label" htmlFor="flowers">Kwiaty</label>
            </div>
            <div className="form-check form-switch form-check-inline">
                <input className="form-check-input" type="checkbox" id="animals" onChange={updateFilter} defaultChecked/>
                <label className="form-check-label" htmlFor="animals">Zwierzęta</label>
            </div>
            <div className="form-check form-switch form-check-inline">
                <input className="form-check-input" type="checkbox" id="cars" onChange={updateFilter} defaultChecked/>
                <label className="form-check-label" htmlFor="cars">Samochody</label>
            </div>
            <div>
                {data.map(element =>
                    {
                        if((element.category == 1 && flowersCheck) || (element.category == 2 && animalsCheck) || (element.category == 3 && carsCheck))
                        {
                            return(
                                <div key={element.id} className='form-check-inline '>
                                    <img src={require("./assets/"+element.filename)} alt={element.alt} style={{margin: "5px", borderRadius: "5px"}}/>
                                    <h4>Pobrań: {element.downloads}</h4>
                                    <button type="button" className="btn btn-success" onClick={() => {download(element.id)}}>Pobierz</button>
                                </div>
                            )
                        }
                        else {
                            return null;
                        }
                    }
                )}
            </div>
        </div>
    )
}

export default Photos;