import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Forfaits</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <section>
      <h2>Bienvenue sur MyTravel</h2>
      <p>Découvrez des destinations incroyables et trouvez le forfait parfait pour votre prochaine aventure.</p>
    </section>
    <footer>
      <p>&copy; 2024 MyTravel. Tous droits réservés.</p>
    </footer>
  `,
  styles: [`
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f0f0;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
    nav {
      background-color: #666;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 20px;
    }
    nav ul li a {
      color: #fff;
      text-decoration: none;
    }
    section {
      padding: 20px;
    }
    footer {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class AppComponent {
  title = 'MyTravel';
}
