import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Container from "react-bootstrap/Container";
import { Card, CardContent, Typography } from "@material-ui/core";

function Charts({ data, title, datakey, grid }) {
  return (
    <Container className="mb-4">
      <Card>
        <CardContent>
          <Typography variant="h5" className="fw-bold mb-4">
            {title}
          </Typography>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={datakey} stroke="#6c5ce7" />
              {grid && <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Charts;
