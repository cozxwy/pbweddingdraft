import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
      <Card>
        <List>
          <ListItem className="p-0">
            <label htmlFor="vertical-list-react" className="px-3 py-2 flex items-center w-full cursor-pointer">
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list" 
                  id="vertical-list-react" 
                  ripple={false} 
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0"
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">React.js</Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label htmlFor="vertical-list-vue" className="px-3 py-2 flex items-center w-full cursor-pointer">
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-vue" 
                  ripple={false} 
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0"
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">Vue.js</Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label htmlFor="vertical-list-svelte" className="px-3 py-2 flex items-center w-full cursor-pointer">
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-svelte" 
                  ripple={false} 
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0"
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">Svelte.js</Typography>
            </label>
          </ListItem>
        </List>
      </Card>
    );
  }