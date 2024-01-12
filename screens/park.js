import { Component } from "react";
import { ScrollView, Text, View } from "react-native";

export default class Parks extends Component {

    state = {
        isLoading: true,
        data: []
    }

    getPark = (park, key) => {
        return (
            <View key={key} style={{
                backgroundColor: "white", borderRadius: 7, padding: 16, margin: 4, margin: 4, shadowColor: "black", shadowOffset: { width: 0, height: 2 }, shadowOpacity: .2, shadowRadius: 4, elevation: 4
            }}>
                <Text style={{ textAlign: "center", borderBottomColor: "#6c757d", borderBottomWidth: 1, fontSize: 18, paddingBottom: 8, marginBottom: 8 }}>{park.parkName}</Text>
                <Text style={{ fontSize: 16 }}>Kapasite (Boş/Toplam): {park.emptyCapacity}/{park.capacity}</Text>
                <Text>Saatler: {park.workHours}</Text>
            </View>
        )
    }

    getParks = () => {
        if (this.state.isLoading) {
            return <Text style={{ paddingHorizontal: 30, paddingVertical: 15, width: '100%', textAlign: "center", color: '#6c757d', fontSize: 18 * 2.25 }}>Loading...</Text>
        } else {
            return this.state.data.map((item, index) => this.getPark(item, index))
        }
    }


    //Component kalıtımı ile birlikte gelir, tüm component yüklendikten sonra işletilir. Asenkron çalışır.
    componentDidMount() {
        url = "https://api.ibb.gov.tr/ispark/Park"
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ isLoading: false, data: json }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                <Text style={{ backgroundColor: '#0078d4', color: 'white', paddingHorizontal: 30, paddingVertical: 15, width: '100%', textAlign: "center", borderBottomColor: "darkblue", borderBottomWidth: 1, fontSize: 18 * 2.25 }}>İBB İsPark's</Text>
                <ScrollView style={{ marginVertical: 15, flex: 1, width: '80%' }}>
                    <this.getParks />
                </ScrollView>
            </View>
        )
    }
}