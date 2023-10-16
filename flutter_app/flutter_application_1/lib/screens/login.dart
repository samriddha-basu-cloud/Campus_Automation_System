import 'package:flutter/material.dart';
import 'package:flutter_application_1/screens/home.dart';
import 'package:flutter_application_1/utils/color_util.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [
        hexStringToColor("#3333ff"),
        hexStringToColor("#6699ff"),
        hexStringToColor("#33ccff")
      ], begin: Alignment.topCenter, end: Alignment.bottomCenter)),
      child: Center(child: Container(
        margin: EdgeInsets.symmetric(horizontal: 30),
         child: ElevatedButton(
          onPressed: () {
            Navigator.push(context, 
              MaterialPageRoute(builder: (context) => HomeScreen()));

          },
          style: ButtonStyle(
            backgroundColor: MaterialStateProperty.resolveWith((states) {
            if (states.contains(MaterialState.pressed)){
              return Colors.blueGrey[500];
            }
            return Colors.white;
          })),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children:<Widget> [
                Image.asset("assets/images/google.png",
                width: 40,
                height: 40,
                ),
                const SizedBox(
                  width: 10,
                ),
                const Text(
                  "Login to Gmail",
                  style: TextStyle(
                    color: Colors.black87,
                    fontWeight: FontWeight.bold,
                    fontSize: 24 ),
                ),
                ],
                ),
              ),
            )
          ),
        ),
      )
    );
  }
}