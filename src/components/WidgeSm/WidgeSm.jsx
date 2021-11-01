import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React from "react";
import { members } from "../../DummyData";

const WidgeSm = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" className="mb-3 fw-bold">
            New join memebers
          </Typography>
          <List>
            {members.map(mem => (
              <ListItem
                key={mem.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={mem.src}
                  alt="user"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                    {mem.name}
                  </Typography>
                  <Typography variant="body" className="text-secondary">
                    {mem.prof}
                  </Typography>
                </div>
                <Button
                  style={{ boxShadow: "none" }}
                  variant="contained"
                  startIcon={<Visibility />}
                >
                  Display
                </Button>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default WidgeSm;
