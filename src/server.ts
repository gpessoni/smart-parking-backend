import express, { Request, Response } from "express";
import path from "path";
import contactMessageRoutes from "./routes/contact_message.routes"
import parkingRoutes from "./routes/parking.routes"
import parkingSlotRoutes from "./routes/parking_slot.routes"
import sensorsRoutes from "./routes/sensors.routes"
import parkingSensorRoutes from "./routes/parking_sensor.routes"
import parkingSensorDataRoutes from "./routes/parking_sensor_data.routes"
import sensorsDataRoutes from "./routes/sensors_data.routes"

const app = express();
const port = 4000;

app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal que retorna o HTML
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.use("/contact-messages", contactMessageRoutes)
app.use("/parkings", parkingRoutes)
app.use("/parking-slots", parkingSlotRoutes)
app.use("/sensors", sensorsRoutes)
app.use("/parking-sensors", parkingSensorRoutes)
app.use("/parking-sensor-data", parkingSensorDataRoutes)
app.use("/sensors-data", sensorsDataRoutes)

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;
