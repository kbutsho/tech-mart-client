import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const Admin = () => {
    return (
        <div>
            <Head>
                <title>Sidebar 07</title>
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