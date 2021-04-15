import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const ReactTraining = (props) => {
  const [checkPermission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCam] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [refresh, setRefresh] = useState(Math.random());

  const requestPermission = async () => {
    const camStat = await BarCodeScanner.requestPermissionsAsync();
    setPermission(camStat);
  };

  const runCamScanner = () => {
    const { status } = checkPermission;
    const hasPermission = status === "granted";

    if (!hasPermission) {
      setRefresh(Math.random());
    } else {
      setShowCam(true);
    }
  };

  const handleScan = (type, data) => {
    setScanned(true);
    setScannedData(`Code Type: ${type} || Code Data: ${data}`);
  };

  return (
    <View style={{ marginTop: 100 }}>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height - 400,
        }}
      >
        {showCamera && (
          <BarCodeScanner
            onBarCodeScanned={
              scanned ? undefined : ({ type, data }) => handleScan(type, data)
            }
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height - 400,
            }}
          />
        )}
      </View>
      <Button
        title="Request Access to Camera"
        onPress={() => requestPermission()}
      ></Button>
      <Button
        title="Launch Camera Scanner"
        onPress={() => runCamScanner()}
      ></Button>
      {showCamera && (
        <Button title="Scan Again" onPress={() => setScanned(false)}></Button>
      )}

      <ScrollView>
        <View>
          <Text style={{ textAlign: "center" }}>Result</Text>
          <Text>{scannedData}</Text>
          {typeof scannedData === "object" && (
            <Text>{`${JSON.stringify(scannedData, null, 2)}\n`}</Text>
          )}
          {/* <Button
            title="Click me"
            onPress={() => Linking.openURL(scannedData)}
          ></Button> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReactTraining;
