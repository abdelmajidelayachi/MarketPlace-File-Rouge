<?php include(VIEWS . 'inc' . DS . 'header.php'); ?>
<h1 class="text-center  mt-5 mb-2 py-3">Add New Product </h1>

<div class="container">
    <div class="row">
        <div class="col-8 mx-auto">


            <?php if (isset($success)) : ?>
                <h3 class="alert alert-success text-center"><?php echo $success; ?></h3>
            <?php endif; ?>
            <?php if (isset($error)) : ?>
                <h3 class="alert alert-danger text-center"><?php echo $error; ?></h3>
            <?php endif; ?>


            <!-- <form class="p-5 border mb-5" method="POST" action=""> -->
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" required name="name" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" required class="form-control" name="price" id="price">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" required class="form-control" name="description" id="description">
            </div>

            <div class="form-group">
                <label for="qty">Quantity</label>
                <input type="number" required class="form-control" name="qty" id="qty">
            </div>
            <button type="button" id="add" name="submit" class="btn btn-primary">Submit</button>
            <!-- </form> -->

        </div>
    </div>
</div>
<script>
    //     function getProductData()
    //     {
    //         name1 = document.getElementById('name').value;
    //         price1 = document.getElementById('price').value;
    //         description1 = document.getElementById('description').value;
    //         qty1 = document.getElementById('qty').value;
    //         console.log(name1);

    //         const data = { name: name1,
    //             price:price1,
    //             description:description1,
    //             qty:qty1

    //         };
    //         // console.log(name1);
    // // fetch('http://mvcbasics.ma/product/store', {
    // //   method: 'POST', // or 'PUT'
    // //   headers: {
    // //     'Content-Type': 'application/json',
    // //   },
    // //   body: JSON.stringify(data),
    // // })
    // // .then(response => response.json())
    // // .then(data => {
    // //   console.log('Success:', data);
    // // })
    // // .catch((error) => {
    // //   console.log('Error:', error);
    // // }); 
    //     }
    btnAdd = document.getElementById('add');
    btnAdd.addEventListener('click', () => {
        name1 = document.getElementById('name').value;
        price1 = document.getElementById('price').value;
        description1 = document.getElementById('description').value;
        qty1 = document.getElementById('qty').value;
        // console.log(name1);

        const data = {
            name: name1,
            price: price1,
            description: description1,
            qty: qty1

        };
        console.log(data);  
        // console.log(JSON.stringify(data));
        fetch('http://mvcbasics.ma/product/store', {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name1,
                    price: price1,
                    description: description1,
                    qty: qty1
                })
            })
            .then(response => {
                // console.log(response);
                return response.json()
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    });
</script>
<?php include(VIEWS . 'inc' . DS . 'footer.php'); ?>