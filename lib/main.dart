import 'package:amazonclone/constants/global_variable.dart';
import 'package:amazonclone/features/auths/screen/auth_screen.dart';
import 'package:amazonclone/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Amazon Clone',
        theme: ThemeData(
          scaffoldBackgroundColor: GlobalVariable.backgroundColor,
          colorScheme: const ColorScheme.light(
            primary: GlobalVariable.secondaryColor,
          ),
          appBarTheme: const AppBarTheme(
              elevation: 0, iconTheme: IconThemeData(color: Colors.black)),
          primarySwatch: Colors.blue,
        ),
        onGenerateRoute: (settings) => generateRoute(settings),
        home:AuthScreen(),
        // Scaffold(
        //   appBar: AppBar(
        //     centerTitle: true,
        //     title: const Text("Hello"),
        //   ),
        //   body: Column(
        //     children: [
        //       const Center(child: const Text('Aamzon Clone')),
        //       Builder(
        //         builder: (context) {
        //           return ElevatedButton(
        //               onPressed: () {
        //                 Navigator.popAndPushNamed(context, AuthScreen.routeName);
        //               },
        //               child: Text("Click"));
        //         }
        //       )
        //     ],
        //   ),
        // )
        );
  }
}
