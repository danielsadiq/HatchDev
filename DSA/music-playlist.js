"use strict";
// SongNode class definition
class SongNode {
    constructor(title, artist = null) {
        this.title = title;
        this.artist = artist;
        this.prev = null;
        this.next = null;
    }
    /**
     * String representation of the song node.
     */
    toString() {
        if (this.artist) {
            return `${this.title} by ${this.artist}`;
        }
        return this.title;
    }
}
// MusicPlaylist class definition
class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSong = null;
        this.count = 0;
        this.repeatCurrentSongEnabled = false;
    }
    /**
     * Checks if the playlist is empty.
     */
    isEmpty() {
        return this.head === null;
    }
    /**
     * Adds a new song to the end of the playlist.
     */
    addSong(title, artist = null) {
        const newSongNode = new SongNode(title, artist);
        if (this.isEmpty()) {
            this.head = newSongNode;
            this.tail = newSongNode;
            this.currentSong = newSongNode; // First song added is the current song
            newSongNode.next = newSongNode; // Point to itself for circularity
            newSongNode.prev = newSongNode; // Point to itself for circularity
        }
        else {
            // Assert tail is not null because we checked isEmpty()
            this.tail.next = newSongNode;
            newSongNode.prev = this.tail;
            newSongNode.next = this.head; // Link new song to the head
            // Assert head is not null because we checked isEmpty()
            this.head.prev = newSongNode; // Link head's prev to the new song (which is the new tail
        }
    }
}
