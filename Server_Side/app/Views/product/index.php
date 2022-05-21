<?php  include(VIEWS.'inc'.DS.'header.php'); 




?>
<script>
    async function get() {
    const response = await fetch("http://mvcbasics.ma/product/products");
    const data = await response.json();
        let i=1;
        console.log(data);
    data.forEach(element => {

        document.getElementById('content').innerHTML += '<tr><td>'+i+'</td><td>'+element.name+'</td><td>'+element.price+'</td><td>'+element.description+'</td><td>'+element.qty+'</td> <td><a href="/product/edit/'+element.id+' " class="btn btn-info" >Edit</a></td></tr>';
        i++;}
    );
    //     <td>
    //                             <a href="<php url('/product/edit/'.$row['id']) ?>" class="btn btn-info" >Edit</a>
    //                         </td>
    //                         <td>
    //                             <a href="<php url('/product/delete/'.$row['id']) ?>" class="btn btn-danger" >Delete</a>
    //                         </td>
    // });
    }

get();
</script>
<h1 class="text-center  my-5 py-3">View All Products </h1>

<div class="container">
    <div class="row">
        <div class="col-10 mx-auto p-4 border mb-5">

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Edit</th>
                    
                    </tr>
                </thead>
                <tbody id="content">

                    
                       
                   
                </tbody>
            </table>


        </div>
    </div>
</div>
<?php  include(VIEWS.'inc'.DS.'footer.php'); ?>





<?php /*if(isset($success)): ?>
                    <h3 class="alert alert-success text-center"><?php  echo $success; ?></h3>
                <?php endif; ?>
                <?php if(isset($error)): ?>
                    <h3 class="alert alert-danger text-center"><?php  echo $error; ?></h3>
                <?php endif; */?>
