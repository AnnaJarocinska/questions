import React, { useState } from 'react';
import update from 'immutability-helper'
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Badge from '../../styles/Badge';
import Label from '../../styles/Label';
import Input from '../../styles/Input';
import RealGameDashboard from './RealGameDashboard';

const RealGameMenu = () => {
    
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState('');
    const [send, setSend] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clickedName, setClickedName] = useState('');
    const [clickedId, setClickedId] = useState(null);
    const [selectedNow, setSelectedNow] = useState('');
    const [continents, setContinents] = useState(['Africa','Asia', 'Australia','Europe', 'North America', 'South America']);

    // const continents = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
   
    const removeCategory = (index) => {

        setContinents(update(continents, {$splice: [[index, 1]]})
          )
        // categories.filter(( id ) => id !== index)
        // const continentss = continents;
        // setContinents([...continentss.slice(0,index), ...continentss.slice(index+1)]
        // );
        
        //   setContinents( { continents: [...continents.slice(0,index), ...continents.slice(index+1)]
        //   })
      }

    const selectCategory = (e) => {
        const selectedCategory = e.target.getAttribute('name');
        const selectedId = e.target.getAttribute('id');

        setCategories([...categories, selectedCategory]);
        if(selectedCategory === clickedName){  
            removeCategory(selectedId)
          }
        setClicked(true);
        setClickedName(selectedCategory);
        setClickedId(selectedId)
        console.log(selectedId, 'selectedId', selectedCategory, 'selectedCategory');
        // const continentss = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
        
        // console.log(continents, 'continentss')
    }
    const selectMode = (e) => {
        const selectedMode = e.target.value
        setMode(selectedMode);
    }
    const sendSelection = () => {
        setSend(true);
    }
    

    return ( 
        <>
        <Container main>
            <Label> Select categories: </Label>
            {continents.map((continent, index) => 
                <Badge 
                className='klasa'
                continent={continent}
                clicked={clicked}
                clickedName={clickedName}
                // selectedNow={continent === clickedName? true : false}
                key={continent}
                id= {index}
                name={continent}
                onClick={selectCategory}>
               {continent} 
            </Badge>)}
            {categories}
            <div onChange={selectMode}>
           <Label> <Input radio type="radio" value="all" name="gameType"/>All</Label>
           <Label><Input radio type="radio" value="random10"name="gameType"/>Random 10</Label>
           </div>
            <Button login red onClick={sendSelection}>Start</Button>
            {send && <RealGameDashboard categories={categories} mode={mode}/>}
        </Container>
        </>  
            
     );
}

export default RealGameMenu;



// import React, { useState } from 'react';
// import { useFormik, Formik, Field, FormikProvider } from 'formik';
// import Container from '../../styles/Container';
// import Button from '../../styles/Button';
// import Form from '../../styles/Form';
// // import Badge from '../../styles/Badge';
// import Checkbox from '../../styles/Checkbox';
// import Label from '../../styles/Label';
// import CheckboxLabel from '../../styles/CheckboxLabel';
// import Input from '../../styles/Input';
// import RealGameDashboard from './RealGameDashboard';
// import { v4 as uuidv4 } from 'uuid';

// const RealGameMenu = () => {
    
//     // const [categories, setCategories] = useState([]);
//     // const [mode, setMode] = useState('');
//     const [send, setSend] = useState(false);
//     // const [checked, setChecked] = useState(false);
//     // const [clickedName, setClickedName] = useState('');
//     // const [change, setChange] = useState(false);

//     const list = ['kkk'];


//     const continents = ['Africa','Asia', 'Australia','Europe', 'North America', 'South America'];
//     // const selectCategory = (e) => {
//     //     const selectedCategory = e.target.getAttribute('name');
//     //     setCategories([...categories, selectedCategory]);
//     //     setClicked(true);
//     //     setClickedName(selectedCategory)
//     // }
//     // const selectMode = (e) => {
//     //     const selectedMode = e.target.value
//     //     setMode(selectedMode);
//     // }
//     // const sendSelection = () => {
//         // setSend(true);
//     // }
//     // const handleChange = (e) => {
        
//         // const selectedCategory = e.target.getAttribute('name');
//         // setCategories([...categories, selectedCategory]);
//         // setChecked(true);
//         // setClickedName(selectedCategory)
//         // setChange(true);
//     // }
//     return ( 
//         <>
//         <Container main>
//         <Formik
//       initialValues={{
//         toggle: false,
//         checked: false,
//       }}
//       onSubmit={(values) => {
//        console.log(values, 'values z checkbox')
//        values.checked.push(values)
//        console.log(values.checked, 'checked')
//       }}
//     >
//         {({ values }) => (
//             <Form form="true">
//             <Label> Select categories: </Label>
           
//             {continents.map((continent) => 
//             // <>
//             <label
            
//             key={uuidv4()}
//             // continent={continent}
//             >
                
             
           
//                 <Field
               
//                 type='checkbox'
//                 name='checked'
//                 // continent={continent}

//                 // checked={checked}
//                 // clickedName={clickedName}}
//                 // change={change}
//                 key={uuidv4()}
//                 // name={continent}
//                 // value={continent}
//                 // checked={values.checked}
//                 // onClicked={selectCategory}
//                 // onChange= {handleChange}
//                 // checked={formik.values.checked}
//                 // onChange={formik.onChange}
//                 // onBlur={formik.handleBlur}
//                 >                
                
               
//             </Field>
//             {continent} 
//             </label>
//             /* </> */
//             /* {continent} 
//             </CheckboxLabel> */
//             )}
//             {/* {categories} */}
//             {/* <div onChange={selectMode}> */}
//            {/* <Label htmlFor='gameType'> <Input radio type="radio"
//             value="all"
//              name="gameType"/>All</Label>
//            <Label htmlFor='gameType'><Input radio type="radio" 
//            value="random10"
//            name="gameType"/>Random 10</Label> */}
//            {/* </div> */}
           
//             <button  type='submit' 
//             // onClick={sendSelection}
//             >Start</button>
//             {/* {send && <RealGameDashboard  */}
//             {/* // categories={categories} mode={mode} */}
//             {/* />} */}
//             </Form>
//         )}
//             </Formik>
          
//         </Container>
//         </>  
            
//      );
// }

// export default RealGameMenu;