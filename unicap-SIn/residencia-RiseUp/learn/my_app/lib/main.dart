// Importa o pacote material 3
import 'package:flutter/material.dart';
import 'package:my_app/pages/buttonSection/button-section.dart';
import 'package:my_app/pages/imageSection/image-section.dart';
import 'package:my_app/pages/textSection/text-section.dart';
import 'package:my_app/pages/titleSection/title-section.dart';

// Inicializa a raiz do projeto
void main() => runApp(const MyApp());

// Configuração geral da aplicação
class MyApp extends StatelessWidget {
  const MyApp({super.key});
  

  @override
  Widget build(BuildContext context) {
    const String appTitle = 'Flutter layout demo';

    // Inicializa o projeto usando o Material APP
    return MaterialApp(
      title: appTitle,

      // Padrão para criar layouts com material app.
      home: Scaffold(
        appBar: AppBar(
          title: const Text(appTitle),
        ),
        body: const SingleChildScrollView(
          child: Column(
            children: [
              ImageSection(
                image: 'images/lake.jpg',
              ),
              TitleSection(
                name: 'Oeschinen Lake Campground',
                location: 'Kandersteg, Switzerland',
              ),
              ButtonSection(),
              TextSection(
                description:
                    'Lake Oeschinen lies at the foot of the Blüemlisalp in the '
                    'Bernese Alps. Situated 1,578 meters above sea level, it '
                    'is one of the larger Alpine Lakes. A gondola ride from '
                    'Kandersteg, followed by a half-hour walk through pastures '
                    'and pine forest, leads you to the lake, which warms to 20 '
                    'degrees Celsius in the summer. Activities enjoyed here '
                    'include rowing, and riding the summer toboggan run.',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

