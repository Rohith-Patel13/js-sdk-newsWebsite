const { createDirectus, rest,readItems } = require('@directus/sdk');

// Client with REST support
const client = createDirectus('http://localhost:8055').with(rest());

// Read all items from the 'Articles' collection
const read_all_items = async () => {
  try {
    const all_items = await client.request(readItems('Articles'));
    // console.log(all_items);
  } catch (error) {
    console.log('Error reading items:', error.message);
  }
};

// Execute the function that has Read all items from the 'Articles' collection
read_all_items();
