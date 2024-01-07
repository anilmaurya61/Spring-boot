import React, { useEffect, useState} from 'react';

import './store.css'
import EmployeeService from './EmployeeService';


export default function LaptopStore() {
    
    
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await EmployeeService.getEmployee();
            console.log(response.data);
            setProducts(response.data);  
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); 
    
        
      }, []);
      const [formdata, setFormdata]=useState([]);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [Lname, setLname] = useState('');
    const [email, setemail] = useState('');
    
    const [searchedProducts, setSearchedProducts] = useState([]);
   
   
     const isNameValid = name.length >= 3 && name.length <= 20;
    // const isPriceValid = price > 0 && price <= 9999;
    // const isBrandValid = brand !== null && brand.trim() !== ''; 
    const isAddButtonDisabled = !name || !Lname || email;
    const handleSearch = () => {
        // Filter products based on the entered name
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(name.toLowerCase())
        );

        setSearchedProducts(filteredProducts);
    };
    const handleAddLaptop = () => {
        if (true) {
          const employee = {
            name,
            Lname,
            email,
          };
          
          console.log("new",employee);
          setProducts((prevFormData) => [...prevFormData, employee]);
    
          // Clear input fields after adding
          setName('');
          setLname('');
          setemail('');
        }
      };


    return (
        <>
            <h1>Welcome to Laptop Store</h1>
            <h2>Laptop Store</h2>
            <h2>Add Laptop</h2>
            <div className='AddLaptop-container'>
            <div>
                    Name:<input 
                        type="text" 
                        value={name} 
                        onChange={(e) => {
                            const newName = e.target.value;
                            if (newName.length <= 20) {
                                setName(newName);
                            }
                        }} 
                    />
                    {!isNameValid && <span style={{ color: 'red' }}>Name should be between 3 and 20 characters</span>}
                </div>
                <div>Last Name:<input type="text" value={Lname} 
                onChange={(e) => {
                    setLname(e.target.value)}} /> </div>
                <div>email:<input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                
                </div>
                
                <button onClick={handleAddLaptop} >Add Laptop</button>
            </div>



            <div className="laptop-list-container">
            <div>Search by Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
                <button onClick={handleSearch}>Search</button>
                <div>Search by Price:<input type="text" /></div>
                <div>Search by Brand:<input type="text" /></div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.emailId}</td>
                            <td>{product.firstName}</td>
                            <td>{product.lastName}</td>
                            
                            <td className="action-buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
