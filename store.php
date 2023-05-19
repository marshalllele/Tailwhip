<?= include 'includes/storeItem.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/style.css" type="text/css" rel="stylesheet">
    <title>Tailwhip Store </title>

</head>

<body>
    
    <div class="navbar">
        <div class="logo">
            <a href="index.html"><img src="images/tailDrawing.png" class="logo-img" alt="Rhode Island Sunset over 'Tail-Whip'"></a>
        </div>

        <h5 id="logo-text">Tailwhip</h5>

        <nav>
            <ul>
                <li class="nav-li"><a href="index.html">HOME</a></li>
                <li class="nav-li"><a href="about.html">ABOUT</a></li>
                <li class="nav-li"><a href="store.php">STORE</a></li>
                <li class="nav-li"><a href="contact.html">CONTACT</a></li>
                <li class="nav-li"><a href="weather.html">WEATHER</a></li>
                <li class="nav-li"><a href="spots.html">SPOTS</a></li>
            </ul>
        </nav>
    </div>

    <section class="store-section"> 
        <div class="store-filter">
            <ul>
                <li class="li" data-filter="all"><button data-filter="all">EVERYTHING</button></li>
                <li class="li" data-filter="men"><button data-filter="men">MENS</button></li>
                <li class="li" data-filter="women"><button data-filter="women">WOMENS</button></li>
                <li class="li" data-filter="kids"><button data-filter="kid">KIDS</button></li>
                <li class="li" data-filter="art"><button data-filter="art">ART</button></li>
            </ul>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/clamPhoto.png" class="item-img" alt="Photo of a bucket of clams">
            <h4 class="item-des">CLAMS</h4>
            <button class="price store-button" id="clam">$45</button>
        </div>

        <div class="store-item art hidden-store">
            <img src=<?=$map->image?> class="item-img" alt=<?=$map->description?>>
            <h4 class="item-des"><?=$map->name?></h4>
            <button class="price store-button" id="map">$<?=$map->price?></button>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/framePhoto.png" class="item-img" alt="Photo of a bucket of clams">
            <h4 class="item-des">Framed Photos</h4>
            <button class="price store-button" id="framed">$45</button>
        </div>

        <div class="store-item men women hidden-store">
            <img src="images/hoodie.png" class="item-img" alt="Local hoodie">
            <h4 class="item-des">Aquidneck Island Hoodie</h4>
            <button class="price store-button" id="">$50</button>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/fishTailPainting.png" class="item-img" alt="Company logo">
            <h4 class="item-des">Tailwhip Painting</h4>
            <button class="price store-button">$50</button>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/clamRaker.png" class="item-img" alt="Clam Raker">
            <h4 class="item-des">Clamming</h4>
            <button class="price store-button">$50</button>
        </div>

        <div class="store-item art hidden-store">
            <img src=<?=$sticker->image?> class="item-img" alt=<?=$sticker->description?>>
            <h4 class="item-des"><?=$sticker->name?></h4>
            <button class="price store-button">$<?=$sticker->price?></button>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/huntingFish.png" class="item-img" alt="Drawing of a fish">
            <h4 class="item-des">Hunting Fish</h4>
            <button class="price store-button">$50</button>
        </div>

        <div class="store-item men women hidden-store">
            <img src="images/RIhoodie.png" class="item-img" alt="Rhode Island Hoodie">
            <h4 class="item-des">Rhode Island Hoodie</h4>
            <button class="price store-button">$45</button>
        </div>

        <div class="store-item art hidden-store">
            <img src="images/moonShot.png" class="item-img" alt="Hunters Moon Painting">
            <h4 class="item-des">Hunters Moon</h4>
            <button class="price store-button">$50</button>
        </div>

        <div class="store-item men women hidden-store">
            <img src="images/truckerHat.png" class="item-img" alt="Trucker Hat">
            <h4 class="item-des">Tailwhip Truckers Hat</h4>
            <button class="price store-button">$25</button>
        </div>

    </section>

    <script defer src="scripts/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    
</body>

<footer>
    <div class="footer-content">
        <h3>Developer Information</h3>
        <p>Nicholas Marshall</p>
        <a href="mailto:nickjrmarshall@gmail.com"><p>nickjrmarshall@gmail.com</p></a>
        <br>
        <p>Newport Native</p>
    </div>
</footer>
</html>