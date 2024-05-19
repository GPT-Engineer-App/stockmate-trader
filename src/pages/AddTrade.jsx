import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack } from '@chakra-ui/react';

const AddTrade = () => {
  const [trade, setTrade] = useState({
    name: '',
    type: 'Buy',
    quantity: '',
    price: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrade({
      ...trade,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(trade);
  };

  return (
    <Box p={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Stock/Option Name</FormLabel>
          <Input name="name" value={trade.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="type" isRequired>
          <FormLabel>Type</FormLabel>
          <Select name="type" value={trade.type} onChange={handleChange}>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </Select>
        </FormControl>
        <FormControl id="quantity" isRequired>
          <FormLabel>Quantity</FormLabel>
          <Input name="quantity" type="number" value={trade.quantity} onChange={handleChange} />
        </FormControl>
        <FormControl id="price" isRequired>
          <FormLabel>Price</FormLabel>
          <Input name="price" type="number" value={trade.price} onChange={handleChange} />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input name="date" type="date" value={trade.date} onChange={handleChange} />
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes</FormLabel>
          <Textarea name="notes" value={trade.notes} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Add Trade</Button>
      </VStack>
    </Box>
  );
};

export default AddTrade;