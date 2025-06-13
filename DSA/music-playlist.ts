// SongNode class definition
class SongNode {
    title: string;
    artist: string | null;
    prev: SongNode | null; // Pointer to the previous song
    next: SongNode | null; // Pointer to the next song

    constructor(title: string, artist: string | null = null) {
        this.title = title;
        this.artist = artist;
        this.prev = null;
        this.next = null;
    }

    /**
     * String representation of the song node.
     */
    toString(): string {
        if (this.artist) {
            return `${this.title} by ${this.artist}`;
        }
        return this.title;
    }
}

// MusicPlaylist class definition
class MusicPlaylist {
    private head: SongNode | null;           // Points to the first song
    private tail: SongNode | null;           // Points to the last song
    private currentSong: SongNode | null;    // Points to the song currently being played
    private count: number;                   // Total number of songs
    private repeatCurrentSongEnabled: boolean; // Flag to repeat the current song

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
    public isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Adds a new song to the end of the playlist.
     */
    public addSong(title: string, artist: string | null = null): void {
        const newSongNode = new SongNode(title, artist);

        if (this.isEmpty()) {
            this.head = newSongNode;
            this.tail = newSongNode;
            this.currentSong = newSongNode; // First song added is the current song
            newSongNode.next = newSongNode;  // Point to itself for circularity
            newSongNode.prev = newSongNode;  // Point to itself for circularity
        } else {
            // Assert tail is not null because we checked isEmpty()
            (this.tail as SongNode).next = newSongNode;
            newSongNode.prev = this.tail;
            newSongNode.next = this.head;  // Link new song to the head
            // Assert head is not null because we checked isEmpty()
            (this.head as SongNode).prev = newSongNode; // Link head's prev to the new song (which is the new tail
        }
}}