import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const Admin = () => {
    return (
        <div>
            <Head>
                <title>Sidebar 07</title>
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </Head>

            <body>
                <div class="wrapper d-flex align-items-stretch">
                    <nav id="sidebar" class="active">
                        <h1><a href="index.html" class="logo">M.</a></h1>
                        <ul class="list-unstyled components mb-5">
                            <li class="active">
                                <a href="#"><span class="fa fa-home"></span> Home</a>
                            </li>
                            <li>
                                <a href="#"><span class="fa fa-user"></span> About</a>
                            </li>
                        </ul>
                        <div class="footer">
                        </div>
                    </nav>

                    <div id="content" class="p-4 p-md-5">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">

                                <button type="button" id="sidebarCollapse" class="btn btn-primary">
                                    <i class="fa fa-bars"></i>
                                    <span class="sr-only">Toggle Menu</span>
                                </button>
                                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i class="fa fa-bars"></i>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Home</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <h2 class="mb-4">Dashboard</h2>
                        <div className="row">
                            <div className="col-md-4 bg-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates quos numquam sunt. Porro eos vel consequatur minus animi quia culpa rem natus accusantium commodi vero totam illum ratione incidunt, reiciendis iusto. Architecto perferendis itaque iusto modi quo totam ex asperiores quia explicabo quibusdam repudiandae animi quas sequi cum nesciunt est recusandae quasi ducimus necessitatibus eaque, sed, vero veritatis facilis. Rem neque temporibus, voluptatum consectetur similique quas nulla aut, quasi consequuntur officiis nemo expedita eaque molestias veritatis? Blanditiis iusto sequi at officia molestias explicabo illum sed deserunt, officiis voluptatibus ratione totam. Suscipit voluptates nulla illum unde consectetur est aspernatur perspiciatis?</div>
                            <div className="col-md-4 bg-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi accusantium necessitatibus explicabo ad fuga beatae neque sunt in natus ipsa, animi aliquam vel sed nihil ducimus atque, tempore possimus laudantium reiciendis fugiat! Delectus debitis cumque consequuntur est optio, magnam, sint necessitatibus quos repellat ad, facilis saepe libero quidem veritatis molestiae ullam? Inventore eius doloremque officia consectetur dicta, consequuntur ad quam cum repellendus, facere a nesciunt aut provident laboriosam sapiente at iste quia nihil dignissimos. Unde culpa harum delectus aperiam veniam impedit, assumenda quod placeat quidem itaque deserunt exercitationem officia nihil molestiae hic repellat dolore iure fugiat id non sunt.</div>
                            <div className="col-md-4 bg-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus, explicabo commodi delectus fugiat iure rem earum numquam vitae adipisci, veritatis ab neque impedit eligendi! Enim quo unde iure nulla, eos voluptatum. Asperiores voluptas iste quasi beatae aperiam, ex illo dolore quod provident aspernatur placeat eos tenetur itaque in ullam eaque officia facere id assumenda quia. Necessitatibus ut nesciunt temporibus voluptatibus iste cumque explicabo est saepe maiores aspernatur, distinctio ab commodi earum nostrum eaque reprehenderit error reiciendis consequuntur aut quidem laudantium nobis consequatur! Nisi consequuntur ab repellendus, nam eligendi possimus nemo doloremque magnam delectus et itaque quia consequatur minima accusamus.</div>
                        </div>
                    </div>
                </div>

                <Script src="/js/jquery.min.js"></Script>
                <Script src="/js/bootstrap.min.js"></Script>
                <Script src="/js/main.js"></Script>
            </body>
        </div>
    );
};

export default Admin;