//To create an instance of ProductController Class
const productsControl = new ProductsController();

function loadData()
{
    //add item to the ProductsController Class - item currently are 
    //hard coded into the class 
    //name: cat tee black, description: 4MSL, imageUrl: 
    //http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif

    productsControl.addItem("Cat Tee Black T-shirt", "4MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Cat", 20);

    productsControl.addItem("Cat Tee Black T-shirt", "4MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Cat", 20);

    productsControl.addItem("Cat Tee Black T-shirt", "4MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Cat", 20);
    
    productsControl.addItem("Cat Tee Black T-shirt", "4MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Cat", 20);
    
    productsControl.displayItem();
}

loadData();