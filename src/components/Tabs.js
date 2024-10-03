import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DataTable from './DataTable';
import SearchBar  from './SearchBar';

const dummyData = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: 25, type: 'Admin', lastActive: '2024-09-30', flaggedItems: 5 },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', age: 30, type: 'User', lastActive: '2024-10-01', flaggedItems: 3 },
    { firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', age: 35, type: 'User', lastActive: '2024-09-28', flaggedItems: 7 },
    { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', age: 28, type: 'Admin', lastActive: '2024-09-27', flaggedItems: 2 },
    { firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', age: 40, type: 'User', lastActive: '2024-09-29', flaggedItems: 8 },
    { firstName: 'Eve', lastName: 'Clark', email: 'eve.clark@example.com', age: 23, type: 'Moderator', lastActive: '2024-09-25', flaggedItems: 1 },
    { firstName: 'David', lastName: 'Miller', email: 'david.miller@example.com', age: 32, type: 'Admin', lastActive: '2024-09-26', flaggedItems: 0 },
    { firstName: 'Grace', lastName: 'Wilson', email: 'grace.wilson@example.com', age: 27, type: 'User', lastActive: '2024-09-22', flaggedItems: 6 },
    { firstName: 'Henry', lastName: 'Moore', email: 'henry.moore@example.com', age: 37, type: 'User', lastActive: '2024-09-18', flaggedItems: 4 },
    { firstName: 'Ivy', lastName: 'Taylor', email: 'ivy.taylor@example.com', age: 29, type: 'User', lastActive: '2024-09-21', flaggedItems: 9 },
    { firstName: 'Jack', lastName: 'Anderson', email: 'jack.anderson@example.com', age: 33, type: 'User', lastActive: '2024-09-30', flaggedItems: 2 },
    { firstName: 'Karen', lastName: 'Thomas', email: 'karen.thomas@example.com', age: 42, type: 'Moderator', lastActive: '2024-09-19', flaggedItems: 3 },
    { firstName: 'Larry', lastName: 'Jackson', email: 'larry.jackson@example.com', age: 45, type: 'User', lastActive: '2024-09-20', flaggedItems: 5 },
    { firstName: 'Mia', lastName: 'White', email: 'mia.white@example.com', age: 31, type: 'Admin', lastActive: '2024-09-24', flaggedItems: 7 },
    { firstName: 'Nathan', lastName: 'Harris', email: 'nathan.harris@example.com', age: 38, type: 'User', lastActive: '2024-09-17', flaggedItems: 6 },
    { firstName: 'Olivia', lastName: 'Martin', email: 'olivia.martin@example.com', age: 26, type: 'User', lastActive: '2024-09-15', flaggedItems: 1 },
    { firstName: 'Paul', lastName: 'Lee', email: 'paul.lee@example.com', age: 39, type: 'Admin', lastActive: '2024-09-12', flaggedItems: 4 },
    { firstName: 'Quincy', lastName: 'Perez', email: 'quincy.perez@example.com', age: 41, type: 'Moderator', lastActive: '2024-09-14', flaggedItems: 2 },
    { firstName: 'Rachel', lastName: 'Walker', email: 'rachel.walker@example.com', age: 35, type: 'User', lastActive: '2024-09-13', flaggedItems: 0 },
    { firstName: 'Steve', lastName: 'Martinez', email: 'steve.martinez@example.com', age: 28, type: 'User', lastActive: '2024-09-11', flaggedItems: 1 },
  ];



export default function Tabs() {
  const [value, setValue] = React.useState('1');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  const filteredData = React.useMemo(() => {
    if (!searchTerm) {
        return dummyData; 
      }
    return dummyData.filter(user => 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.age.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.flaggedItems.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);


  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop: '3px' }}>
      <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '27%' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active" value="1" />
            <Tab label="Suspend" value="2" />
            <Tab label="Banned" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><DataTable data={filteredData} /></TabPanel>
        <TabPanel value="2"><DataTable data={filteredData} /></TabPanel>
        <TabPanel value="3"><DataTable data={filteredData} /></TabPanel>
      </TabContext>
    </Box>
  );
}