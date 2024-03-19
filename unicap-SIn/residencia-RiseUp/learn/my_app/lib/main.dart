// Importa o pacote material 3
import 'package:flutter/material.dart';

// Inicializa a raiz do projeto
void main() => runApp(const MyApp());


// Configuração geral da página
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
        body: const Center(
          child: Text('Hello bruno'),
        ),
      ),
    );
  }
}

class TitleSection extends StatelessWidget {
  const TitleSection({
    super.key,
    required this.name,
    required this.location,
  });

  final String name;
  final String location;

  @override
  Widget build(BuildContext context) {
    return Placeholder();
  }
}